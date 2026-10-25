import React from 'react';
import { ShieldCheck, HeartHandshake, ArrowRight } from 'lucide-react';
import { Button } from '../common/Button';

export const AssuranceBanner: React.FC = () => {
  return (
    <section className="container-custom my-8" aria-labelledby="assurance-heading">
      <div className="bg-gradient-to-r from-clinic-primary via-[#5D4696] to-clinic-primary text-white rounded-3xl p-6 sm:p-8 md:p-12 shadow-soft-lg relative overflow-hidden">
        {/* Decorative background watermarks */}
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none" />
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
          {/* Left Text Content */}
          <div className="md:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/15 text-clinic-lavender border border-white/20">
              <ShieldCheck className="w-4 h-4 text-clinic-lavender" aria-hidden="true" />
              Patient Reassurance & Trust
            </div>

            <h2
              id="assurance-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight"
            >
              You are always in safe hands.{' '}
              <span className="block text-clinic-lavender font-bold text-xl sm:text-2xl md:text-3xl mt-1">
                We are ready to help, anytime.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-white/85 leading-relaxed max-w-2xl">
              Whether it’s a routine check-up, pediatric dental care for your child, or orthodontic alignment, our dedicated team ensures a comforting, stress-free experience from your first consultation to complete recovery.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                to="/about"
                variant="secondary"
                size="md"
                className="bg-white text-clinic-primary hover:bg-clinic-lavender border-0 shadow-soft-sm font-semibold"
              >
                Meet Dr. Anupriya & Our Doctors
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
              <Button
                to="/treatments"
                variant="ghost"
                size="md"
                className="text-white hover:bg-white/10 hover:text-white"
              >
                Explore All Treatments
              </Button>
            </div>
          </div>

          {/* Right Visual Badge */}
          <div className="md:col-span-4 flex justify-center md:justify-end">
            <div className="relative group max-w-[240px] sm:max-w-[280px]">
              <div className="rounded-2xl overflow-hidden border-2 border-white/20 shadow-soft-md aspect-[4/3] bg-white/10">
                <img
                  src="/images/doctor_consulting.jpg"
                  alt="Doctor consulting a dental patient gently inside Sakthi Dental Clinic"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-white text-clinic-text px-3 py-1.5 rounded-xl shadow-soft-md text-[11px] font-bold flex items-center gap-1.5 border border-clinic-border">
                <HeartHandshake className="w-3.5 h-3.5 text-clinic-primary" />
                Compassionate Care
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
