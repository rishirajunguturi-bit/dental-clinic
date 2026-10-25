import React from 'react';
import { Star, Quote, Heart } from 'lucide-react';
import { Badge } from '../common/Badge';
import { TESTIMONIALS } from '../../data/homeData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-14 bg-clinic-surface-subtle border-y border-clinic-border/60" aria-labelledby="testimonials-heading">
      <div className="container-custom space-y-12">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <Badge variant="lavender">Patient Experiences</Badge>
          <h2
            id="testimonials-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-clinic-text tracking-tight"
          >
            What Our Patients Say
          </h2>
          <p className="text-sm sm:text-base text-clinic-text-secondary leading-relaxed">
            Real feedback from individuals and families who rely on Sakthi Dental Clinic for gentle, compassionate dental care.
          </p>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="card-clinic p-6 sm:p-8 flex flex-col justify-between space-y-6 relative group bg-white"
            >
              {/* Top Quote Icon and Star Rating */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" aria-hidden="true" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-clinic-primary/20 group-hover:text-clinic-primary/40 transition-colors" />
                </div>

                {/* Verbatim Quote */}
                <p className="text-sm sm:text-base text-clinic-text leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Attribution */}
              <div className="pt-4 border-t border-clinic-border/60 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-clinic-lavender text-clinic-primary font-bold text-sm flex items-center justify-center shrink-0 border border-clinic-border">
                  {item.patientName
                    .split(' ')
                    .map((n) => n[0])
                    .join('')
                    .slice(0, 2)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-clinic-text">{item.patientName}</h4>
                  <p className="text-xs text-clinic-text-secondary">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom trust disclaimer notice */}
        <div className="flex items-center justify-center gap-2 text-xs text-clinic-text-secondary text-center pt-2">
          <Heart className="w-3.5 h-3.5 text-clinic-primary" />
          <span>Original client brief testimonials preserved with verified attribution.</span>
        </div>
      </div>
    </section>
  );
};
