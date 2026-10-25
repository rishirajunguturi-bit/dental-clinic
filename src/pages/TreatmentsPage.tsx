import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Search, CheckCircle2, Sparkles, Activity, Shield, Smile, Cpu } from 'lucide-react';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { ALL_15_TREATMENTS, DetailedTreatment } from '../data/clinicData';

export const TreatmentsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: `All Treatments (${ALL_15_TREATMENTS.length})` },
    { id: 'preventive', label: 'Preventive & Pediatric' },
    { id: 'restorative', label: 'Restorative & Dentures' },
    { id: 'surgical', label: 'Oral Surgery' },
    { id: 'cosmetic', label: 'Cosmetics & Whitening' },
    { id: 'orthodontics', label: 'Braces & Clear Aligners' },
    { id: 'laser', label: 'Laser Dentistry' },
  ];

  const filteredTreatments = ALL_15_TREATMENTS.filter((treatment) => {
    const matchesCategory =
      selectedCategory === 'all' || treatment.category === selectedCategory;
    const matchesSearch =
      treatment.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      treatment.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      treatment.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getTreatmentIcon = (category: DetailedTreatment['category']) => {
    switch (category) {
      case 'preventive':
        return <Sparkles className="w-5 h-5 text-clinic-primary" />;
      case 'restorative':
        return <Shield className="w-5 h-5 text-clinic-primary" />;
      case 'surgical':
        return <Activity className="w-5 h-5 text-clinic-primary" />;
      case 'cosmetic':
        return <Smile className="w-5 h-5 text-clinic-primary" />;
      case 'orthodontics':
        return <Smile className="w-5 h-5 text-clinic-primary" />;
      case 'laser':
        return <Cpu className="w-5 h-5 text-clinic-primary" />;
      default:
        return <Sparkles className="w-5 h-5 text-clinic-primary" />;
    }
  };

  return (
    <div className="space-y-12 py-8">
      {/* 1. Header Banner */}
      <section className="container-custom" aria-labelledby="treatments-page-heading">
        <div className="bg-gradient-to-br from-clinic-lavender/80 via-white to-clinic-lavender/30 border border-clinic-border rounded-3xl p-8 sm:p-12 lg:p-14 shadow-soft-sm">
          <div className="max-w-3xl space-y-4">
            <Badge variant="lavender" className="gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-clinic-primary" />
              Comprehensive Dental Services
            </Badge>
            <h1
              id="treatments-page-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-clinic-text tracking-tight leading-tight"
            >
              Our Complete Range of{' '}
              <span className="text-clinic-primary">15 Dental Treatments</span>
            </h1>
            <p className="text-base sm:text-lg text-clinic-text-secondary leading-relaxed">
              From gentle preventive cleanings to advanced dental implants, laser surgeries, and orthodontic aligners — explore all 15 clinical dental treatments delivered at Sakthi Dental Clinic in Hosur.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Search & Category Filters */}
      <section className="container-custom" aria-label="Treatment Filters">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative max-w-md w-full">
            <Search className="w-4 h-4 text-clinic-text-secondary absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search treatments (e.g. Scaling, Braces, RCT)..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-clinic-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-clinic-primary text-clinic-text placeholder:text-clinic-text-secondary/60 shadow-soft-sm"
              aria-label="Search treatments"
            />
          </div>

          {/* Active count notice */}
          <div className="text-xs text-clinic-text-secondary font-medium self-center md:self-auto">
            Showing {filteredTreatments.length} of {ALL_15_TREATMENTS.length} treatments
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-4 scrollbar-none" role="tablist" aria-label="Treatment Categories">
          {categories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={selectedCategory === cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
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

      {/* 3. Treatments Grid */}
      <section className="container-custom" aria-label="Treatments List">
        {filteredTreatments.length === 0 ? (
          <div className="card-clinic p-12 text-center space-y-4">
            <p className="text-base font-semibold text-clinic-text">
              No treatments found matching &ldquo;{searchQuery}&rdquo;
            </p>
            <p className="text-xs text-clinic-text-secondary">
              Try adjusting your search query or reset the category filters.
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTreatments.map((treatment) => (
              <div
                key={treatment.id}
                className="card-clinic p-6 sm:p-7 flex flex-col justify-between space-y-6 group hover:border-clinic-primary/50"
              >
                <div className="space-y-4">
                  {/* Card Header */}
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-2xl bg-clinic-lavender flex items-center justify-center group-hover:scale-105 transition-transform">
                      {getTreatmentIcon(treatment.category)}
                    </div>
                    <span className="text-[11px] font-semibold text-clinic-primary bg-clinic-lavender/70 px-2.5 py-1 rounded-full border border-clinic-border/60">
                      {treatment.categoryLabel}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h2 className="text-xl font-bold text-clinic-text group-hover:text-clinic-primary transition-colors">
                      {treatment.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-clinic-text-secondary leading-relaxed mt-2.5">
                      {treatment.description}
                    </p>
                  </div>
                </div>

                {/* Highlights and Action */}
                <div className="pt-4 border-t border-clinic-border/60 space-y-4">
                  <ul className="space-y-1.5 text-xs text-clinic-text-secondary font-medium">
                    {treatment.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-clinic-primary shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2 border-t border-clinic-border/40 flex items-center justify-between">
                    <span className="text-[11px] font-medium text-clinic-text-secondary">
                      Specialist Consultation
                    </span>
                    <Link
                      to="/contact"
                      className="text-xs font-semibold text-clinic-primary hover:text-clinic-primary-hover inline-flex items-center gap-1 hover:underline"
                    >
                      Inquire about care &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 4. Bottom Consultation Banner */}
      <section className="container-custom pb-6">
        <div className="bg-gradient-to-r from-clinic-primary via-[#57418F] to-clinic-primary text-white rounded-3xl p-8 sm:p-12 text-center space-y-4 shadow-soft-md">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Not sure which dental treatment is right for you?
          </h2>
          <p className="text-sm sm:text-base text-white/85 max-w-xl mx-auto leading-relaxed">
            Schedule an in-person dental consultation at our clinic in Hosur. Our doctors will examine your teeth and recommend the most gentle, effective care plan.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Button to="/contact" variant="secondary" size="lg" className="bg-white text-clinic-primary hover:bg-clinic-lavender border-0 font-semibold">
              <Calendar className="w-5 h-5" />
              Fix an Appointment
            </Button>
            <Button to="/faqs" variant="ghost" size="lg" className="text-white hover:bg-white/10 hover:text-white">
              Read Patient FAQs &rarr;
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TreatmentsPage;
