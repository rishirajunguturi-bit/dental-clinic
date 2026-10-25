import React from 'react';
import { Calendar, PhoneCall, CheckCircle2, Shield, Sparkles } from 'lucide-react';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { CLINIC_INFO } from '../../data/clinicInfo';
import { HERO_STATS } from '../../data/homeData';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-6 pb-14 md:pt-10 md:pb-20" aria-labelledby="hero-title">
      {/* Background lavender glow circles */}
      <div className="absolute top-0 right-1/4 -z-10 w-96 h-96 bg-clinic-lavender/60 rounded-full blur-3xl opacity-70 pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 -z-10 w-80 h-80 bg-clinic-lavender/50 rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headline and CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="lavender" className="gap-1.5 py-1 px-3">
                <Sparkles className="w-3.5 h-3.5 text-clinic-primary" aria-hidden="true" />
                Trusted Dental Clinic in Hosur
              </Badge>
              <span className="text-xs font-medium text-clinic-text-secondary">
                Dr. Anupriya & Specialist Team
              </span>
            </div>

            <h1
              id="hero-title"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-clinic-text tracking-tight leading-[1.15]"
            >
              Specialized Dental Care for{' '}
              <span className="text-clinic-primary underline decoration-clinic-border decoration-wavy decoration-2 underline-offset-8">
                Women, Children & Families
              </span>
            </h1>

            <p className="text-base sm:text-lg text-clinic-text-secondary leading-relaxed max-w-2xl">
              Experience compassionate, expert-led dental services tailored to your needs, all in a modern and welcoming environment.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button to="/contact" size="lg" className="shadow-soft-md">
                <Calendar className="w-5 h-5" aria-hidden="true" />
                Fix an Appointment
              </Button>
              <Button
                variant="secondary"
                size="lg"
                href={`tel:${CLINIC_INFO.phoneNumbers[0].replace(/\s+/g, '')}`}
              >
                <PhoneCall className="w-5 h-5 text-clinic-primary" aria-hidden="true" />
                Emergency Dental Support
              </Button>
            </div>

            {/* Micro assurance bullet points */}
            <div className="pt-2 flex flex-wrap gap-y-2 gap-x-6 text-xs text-clinic-text-secondary font-medium">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-clinic-primary" />
                Gentle, stress-free procedures
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-clinic-primary" />
                Hospital-grade autoclave sterilization
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-clinic-primary" />
                Daily appointments available
              </span>
            </div>
          </div>

          {/* Right Column: Hero Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative soft border */}
              <div className="p-3 bg-white rounded-3xl shadow-soft-lg border border-clinic-border relative z-10 transition-transform duration-300 hover:scale-[1.01]">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-clinic-lavender/30">
                  <img
                    src="/images/hero_clinic.jpg"
                    alt="Dr. Anupriya caring for a smiling young patient and mother inside Sakthi Dental Clinic in Hosur"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                  />
                  {/* Visual overlay tag */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-clinic-border text-xs font-semibold text-clinic-text shadow-soft-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Open for Appointments
                  </div>
                </div>

                {/* Sub-card trust badge */}
                <div className="mt-3 p-3.5 bg-clinic-lavender/50 rounded-xl border border-clinic-border/70 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-clinic-text">Sakthi Dental Clinic</p>
                    <p className="text-[11px] text-clinic-text-secondary">Anthivadi, Hosur • Tamil Nadu</p>
                  </div>
                  <span className="text-xs font-semibold text-clinic-primary bg-white px-2.5 py-1 rounded-lg border border-clinic-border/60 shadow-soft-sm">
                    Trusted Since 2004
                  </span>
                </div>
              </div>

              {/* Decorative background aura */}
              <div className="absolute -inset-2 bg-gradient-to-r from-clinic-primary/10 to-clinic-lavender rounded-[2rem] blur-xl -z-10" />
            </div>
          </div>
        </div>

        {/* Hero Quick Statistics Bar */}
        <div className="mt-14 pt-8 border-t border-clinic-border/70 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {HERO_STATS.map((stat, i) => (
            <div key={i} className="space-y-1">
              <p className="text-2xl sm:text-3xl font-extrabold text-clinic-primary tracking-tight">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm font-medium text-clinic-text-secondary">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
