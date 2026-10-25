import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, CheckCircle2, Shield, Smile, Activity } from 'lucide-react';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { FEATURED_TREATMENTS } from '../../data/homeData';

export const FeaturedTreatments: React.FC = () => {
  // Treatment specific icons
  const getTreatmentIcon = (id: string) => {
    switch (id) {
      case 'tooth-extraction':
        return <Activity className="w-5 h-5 text-clinic-primary" />;
      case 'artificial-complete-denture':
        return <Smile className="w-5 h-5 text-clinic-primary" />;
      case 'tooth-filling':
        return <Shield className="w-5 h-5 text-clinic-primary" />;
      case 'teeth-cleaning-scaling':
        return <Sparkles className="w-5 h-5 text-clinic-primary" />;
      case 'bleaching':
        return <Sparkles className="w-5 h-5 text-clinic-primary" />;
      case 'orthodontic-treatment':
        return <Smile className="w-5 h-5 text-clinic-primary" />;
      default:
        return <Activity className="w-5 h-5 text-clinic-primary" />;
    }
  };

  return (
    <section className="py-14" aria-labelledby="featured-treatments-heading">
      <div className="container-custom space-y-10">
        {/* Header row with Title and link */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <Badge variant="lavender">Specialized Services</Badge>
            <h2
              id="featured-treatments-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-clinic-text tracking-tight"
            >
              Featured Treatments
            </h2>
            <p className="text-sm sm:text-base text-clinic-text-secondary leading-relaxed">
              Explore six of our most frequently requested clinical services, provided with gentle care, modern standards, and personalized attention.
            </p>
          </div>

          <div className="shrink-0">
            <Button to="/treatments" variant="outline" size="md">
              View Full List of Treatments
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>

        {/* 6 Featured Treatment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_TREATMENTS.map((treatment) => (
            <div
              key={treatment.id}
              className="card-clinic p-6 flex flex-col justify-between space-y-5 group hover:border-clinic-primary/40"
            >
              <div className="space-y-4">
                {/* Header row of card */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-clinic-lavender flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getTreatmentIcon(treatment.id)}
                  </div>
                  <span className="text-[11px] font-semibold text-clinic-primary bg-clinic-lavender/60 px-2.5 py-0.5 rounded-full border border-clinic-border/60">
                    {treatment.tag}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-clinic-text group-hover:text-clinic-primary transition-colors">
                    {treatment.title}
                  </h3>
                  <p className="text-xs text-clinic-primary font-medium mt-0.5">
                    {treatment.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-clinic-text-secondary leading-relaxed mt-2.5">
                    {treatment.description}
                  </p>
                </div>
              </div>

              {/* Highlights and Direct Action */}
              <div className="pt-4 border-t border-clinic-border/60 space-y-3">
                <ul className="space-y-1.5 text-xs text-clinic-text-secondary">
                  {treatment.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-clinic-primary shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2 flex items-center justify-between">
                  <Link
                    to="/treatments"
                    className="text-xs font-semibold text-clinic-primary hover:text-clinic-primary-hover inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                  >
                    Learn more & treatment details &rarr;
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom banner connecting to full 15 treatments */}
        <div className="bg-clinic-lavender/50 border border-clinic-border rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-clinic-text">
              Looking for our complete catalog of 15 specialized dental treatments?
            </h4>
            <p className="text-xs text-clinic-text-secondary">
              Includes Laser Dentistry, Dental Implants, Root Canal Therapy, Pediatric Dentistry, Clear Aligners, Veneers & more.
            </p>
          </div>
          <Button to="/treatments" size="sm" className="shrink-0">
            View All 15 Treatments
            <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};
