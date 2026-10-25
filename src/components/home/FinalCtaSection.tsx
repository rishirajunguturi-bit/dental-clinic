import React from 'react';
import { Calendar, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '../common/Button';
import { CLINIC_INFO } from '../../data/clinicInfo';

export const FinalCtaSection: React.FC = () => {
  return (
    <section className="container-custom my-12" aria-labelledby="final-cta-heading">
      <div className="bg-gradient-to-br from-clinic-lavender via-white to-clinic-lavender/60 border border-clinic-border rounded-3xl p-8 sm:p-12 md:p-16 text-center space-y-6 shadow-soft-md relative overflow-hidden">
        {/* Subtle decorative circles */}
        <div className="absolute -top-12 -left-12 w-48 h-48 bg-clinic-primary/5 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-clinic-primary/10 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-clinic-primary text-white">
            <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
            Appointments Open Today
          </span>

          <h2
            id="final-cta-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-clinic-text tracking-tight leading-tight"
          >
            Ready to Experience Compassionate, Expert-Led Dental Care?
          </h2>

          <p className="text-sm sm:text-base text-clinic-text-secondary leading-relaxed max-w-2xl mx-auto">
            Take the first step toward a healthier, brighter smile for you and your family. Reach out to schedule a consultation at our Hosur clinic or request emergency assistance.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Button to="/contact" size="lg" className="shadow-soft-md">
              <Calendar className="w-5 h-5" aria-hidden="true" />
              Fix an Appointment
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href={`tel:${CLINIC_INFO.phoneNumbers[0].replace(/\s+/g, '')}`}
            >
              <Phone className="w-5 h-5 text-clinic-primary" aria-hidden="true" />
              Call: {CLINIC_INFO.phoneNumbers[0]}
            </Button>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-clinic-text-secondary font-medium">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-clinic-primary" />
              B2/8, SBM Layout, Anthivadi, Hosur
            </span>
            <span>•</span>
            <span>Sunday to Saturday: 9:00 AM – 7:00 PM</span>
            <span>•</span>
            <span>No fake online booking — verified direct clinic contact</span>
          </div>
        </div>
      </div>
    </section>
  );
};
