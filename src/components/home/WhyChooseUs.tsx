import React from 'react';
import { Layers, Award, Heart, Cpu, CheckCircle2 } from 'lucide-react';
import { Badge } from '../common/Badge';
import { WHY_CHOOSE_US } from '../../data/homeData';

export const WhyChooseUs: React.FC = () => {
  // Map icons to each item
  const getIcon = (id: string) => {
    switch (id) {
      case 'all-in-one':
        return <Layers className="w-6 h-6 text-clinic-primary" aria-hidden="true" />;
      case 'experienced-doctors':
        return <Award className="w-6 h-6 text-clinic-primary" aria-hidden="true" />;
      case 'patient-centric':
        return <Heart className="w-6 h-6 text-clinic-primary" aria-hidden="true" />;
      case 'technology-driven':
        return <Cpu className="w-6 h-6 text-clinic-primary" aria-hidden="true" />;
      default:
        return <Layers className="w-6 h-6 text-clinic-primary" aria-hidden="true" />;
    }
  };

  return (
    <section className="py-14 bg-clinic-surface-subtle border-y border-clinic-border/60" aria-labelledby="why-choose-heading">
      <div className="container-custom space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <Badge variant="lavender">Our Core Commitments</Badge>
          <h2
            id="why-choose-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-clinic-text tracking-tight"
          >
            Why Choose Sakthi Dental Clinic?
          </h2>
          <p className="text-sm sm:text-base text-clinic-text-secondary leading-relaxed">
            Discover what makes our clinic the trusted choice for women, children, and families seeking gentle, clinical excellence in Hosur.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item) => (
            <div
              key={item.id}
              className="card-clinic p-6 flex flex-col justify-between space-y-5 group"
            >
              <div className="space-y-4">
                {/* Icon & Badge */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-clinic-lavender flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    {getIcon(item.id)}
                  </div>
                  <span className="text-[11px] font-semibold text-clinic-primary bg-clinic-lavender/60 px-2.5 py-1 rounded-full border border-clinic-border/40">
                    {item.badge}
                  </span>
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-lg font-bold text-clinic-text group-hover:text-clinic-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-clinic-text-secondary leading-relaxed mt-2">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Highlights List */}
              <ul className="pt-4 border-t border-clinic-border/60 space-y-2 text-xs text-clinic-text-secondary">
                {item.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-clinic-primary shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
