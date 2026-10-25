import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Search, Sparkles, MessageSquare, Phone } from 'lucide-react';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { ALL_14_FAQS } from '../data/clinicData';
import { CLINIC_INFO } from '../data/clinicInfo';

export const FaqsPage: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-2']);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: `All Questions (${ALL_14_FAQS.length})` },
    { id: 'General & Pain Relief', label: 'Pain & Sensitivity' },
    { id: 'Cleaning & Gum Care', label: 'Cleaning & Scaling' },
    { id: 'Root Canal (RCT)', label: 'Root Canal (RCT)' },
    { id: 'Dentures & Implants', label: 'Dentures & Implants' },
    { id: 'Orthodontics & Braces', label: 'Braces' },
    { id: 'Pediatric Dentistry', label: 'Children Dentistry' },
    { id: 'Oral Hygiene', label: 'Oral Hygiene' },
  ];

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const expandAll = () => {
    setOpenIds(ALL_14_FAQS.map((f) => f.id));
  };

  const collapseAll = () => {
    setOpenIds([]);
  };

  const filteredFaqs = ALL_14_FAQS.filter((faq) => {
    const matchesCategory =
      selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-12 py-8">
      {/* 1. Header Banner */}
      <section className="container-custom" aria-labelledby="faqs-page-heading">
        <div className="bg-gradient-to-br from-clinic-lavender/80 via-white to-clinic-lavender/30 border border-clinic-border rounded-3xl p-8 sm:p-12 lg:p-14 shadow-soft-sm">
          <div className="max-w-3xl space-y-4">
            <Badge variant="lavender" className="gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-clinic-primary" />
              Patient Knowledge Base
            </Badge>
            <h1
              id="faqs-page-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-clinic-text tracking-tight leading-tight"
            >
              Frequently Asked{' '}
              <span className="text-clinic-primary">Dental Questions</span>
            </h1>
            <p className="text-base sm:text-lg text-clinic-text-secondary leading-relaxed">
              Find clear, evidence-based answers to 14 common patient queries regarding dental pain relief, scaling myths, braces, root canals, milk teeth care, and daily hygiene.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Controls & Search */}
      <section className="container-custom" aria-label="FAQ Search & Controls">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Search Field */}
          <div className="relative max-w-md w-full">
            <Search className="w-4 h-4 text-clinic-text-secondary absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. Scaling, Braces, RCT, Sensitivity)..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-clinic-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-clinic-primary text-clinic-text placeholder:text-clinic-text-secondary/60 shadow-soft-sm"
              aria-label="Search frequently asked questions"
            />
          </div>

          {/* Expand/Collapse Actions */}
          <div className="flex items-center gap-3 text-xs font-semibold self-end md:self-auto">
            <button
              type="button"
              onClick={expandAll}
              className="text-clinic-primary hover:underline"
            >
              Expand All
            </button>
            <span className="text-clinic-border">|</span>
            <button
              type="button"
              onClick={collapseAll}
              className="text-clinic-text-secondary hover:text-clinic-primary"
            >
              Collapse All
            </button>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-4 scrollbar-none" role="tablist" aria-label="FAQ Categories">
          {categories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={selectedCategory === cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                selectedCategory === cat.id
                  ? 'bg-clinic-primary text-white shadow-soft-sm'
                  : 'bg-white border border-clinic-border text-clinic-text hover:bg-clinic-lavender/50 hover:text-clinic-primary'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* 3. Accordion List */}
      <section className="container-custom" aria-label="FAQ Accordion">
        {filteredFaqs.length === 0 ? (
          <div className="card-clinic p-12 text-center space-y-4">
            <HelpCircle className="w-10 h-10 text-clinic-primary mx-auto" />
            <p className="text-base font-semibold text-clinic-text">
              No questions found matching &ldquo;{searchQuery}&rdquo;
            </p>
            <p className="text-xs text-clinic-text-secondary">
              Try searching with different terms or reset your filters.
            </p>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
            >
              Reset Filters
            </Button>
          </div>
        ) : (
          <div className="space-y-4 max-w-4xl mx-auto">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openIds.includes(faq.id);
              const contentId = `faq-answer-${faq.id}`;
              const buttonId = `faq-btn-${faq.id}`;

              return (
                <div
                  key={faq.id}
                  className={`card-clinic transition-all duration-200 overflow-hidden ${
                    isOpen ? 'border-clinic-primary/50 shadow-soft-md' : 'hover:border-clinic-primary/30'
                  }`}
                >
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clinic-primary"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-xs font-bold text-clinic-primary bg-clinic-lavender w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      <div>
                        <h2 className="text-base sm:text-lg font-bold text-clinic-text leading-snug">
                          {faq.question}
                        </h2>
                        <span className="text-[11px] font-medium text-clinic-text-secondary/80 mt-1 block">
                          Category: {faq.category}
                        </span>
                      </div>
                    </div>
                    <div
                      className={`w-8 h-8 rounded-full bg-clinic-lavender/60 flex items-center justify-center text-clinic-primary shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 bg-clinic-primary text-white' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" aria-hidden="true" />
                    </div>
                  </button>

                  {isOpen && (
                    <div
                      id={contentId}
                      role="region"
                      aria-labelledby={buttonId}
                      className="px-5 pb-6 sm:px-6 sm:pb-6 pt-1 text-sm text-clinic-text-secondary leading-relaxed border-t border-clinic-border/60 animate-fadeIn"
                    >
                      <p className="bg-clinic-surface-subtle p-4 rounded-xl border border-clinic-border/40">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* 4. Have a Different Question? Support Banner */}
      <section className="container-custom pb-6">
        <div className="bg-gradient-to-r from-clinic-primary to-[#57418F] text-white rounded-3xl p-8 sm:p-12 text-center space-y-4 shadow-soft-md">
          <MessageSquare className="w-8 h-8 mx-auto text-clinic-lavender" />
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Have a Specific Dental Question?
          </h2>
          <p className="text-sm sm:text-base text-white/85 max-w-xl mx-auto leading-relaxed">
            Our clinical team is always available to assist. Call us directly or send a message through our Contact page.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Button to="/contact" variant="secondary" size="lg" className="bg-white text-clinic-primary hover:bg-clinic-lavender border-0 font-semibold">
              Contact Us Online
            </Button>
            <Button
              variant="ghost"
              size="lg"
              href={`tel:${CLINIC_INFO.phoneNumbers[0].replace(/\s+/g, '')}`}
              className="text-white hover:bg-white/10 hover:text-white"
            >
              <Phone className="w-4 h-4" />
              Call: {CLINIC_INFO.phoneNumbers[0]}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FaqsPage;
