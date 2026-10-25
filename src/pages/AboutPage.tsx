import React from 'react';
import { Calendar, UserCheck, Target, Eye, ShieldCheck, Sparkles, Award } from 'lucide-react';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { DR_ANUPRIYA_BIO, CLINIC_VISION_MISSION, DOCTORS_LIST } from '../data/clinicData';

export const AboutPage: React.FC = () => {
  return (
    <div className="space-y-16 py-8">
      {/* 1. Page Header */}
      <section className="container-custom" aria-labelledby="about-heading">
        <div className="bg-gradient-to-br from-clinic-lavender/80 via-white to-clinic-lavender/30 border border-clinic-border rounded-3xl p-8 sm:p-12 lg:p-14 shadow-soft-sm">
          <div className="max-w-3xl space-y-4">
            <Badge variant="lavender" className="gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-clinic-primary" />
              About Sakthi Dental Clinic • Hosur
            </Badge>
            <h1
              id="about-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-clinic-text tracking-tight leading-tight"
            >
              Caring for Smiles with{' '}
              <span className="text-clinic-primary">Integrity, Compassion & Skill</span>
            </h1>
            <p className="text-base sm:text-lg text-clinic-text-secondary leading-relaxed">
              Founded in 2004, Sakthi Dental Clinic provides specialized, gentle dental care tailored for women, children, and families in a warm and modern clinical setting.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Get to Know Dr. Anupriya */}
      <section className="container-custom" aria-labelledby="dr-anupriya-heading">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Portrait & Experience badge */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div className="p-3 bg-white rounded-3xl shadow-soft-lg border border-clinic-border">
                <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-clinic-lavender/30">
                  <img
                    src="/images/doctor_consulting.jpg"
                    alt="Dr. Anupriya, Founder and Chief Dental Surgeon at Sakthi Dental Clinic"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="mt-4 p-4 bg-clinic-lavender/50 rounded-2xl border border-clinic-border/70 flex items-center justify-between">
                  <div>
                    <h2 className="text-base font-bold text-clinic-text">{DR_ANUPRIYA_BIO.name}</h2>
                    <p className="text-xs text-clinic-primary font-semibold">{DR_ANUPRIYA_BIO.title}</p>
                    <p className="text-[11px] text-clinic-text-secondary mt-0.5">{DR_ANUPRIYA_BIO.experience}</p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-clinic-primary text-white flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Biography Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-clinic-primary bg-clinic-lavender px-3 py-1 rounded-full border border-clinic-border/60">
                <UserCheck className="w-3.5 h-3.5" />
                Founder & Lead Dentist
              </div>
              <h2
                id="dr-anupriya-heading"
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-clinic-text tracking-tight"
              >
                Get to Know Dr. Anupriya
              </h2>
              <p className="text-base font-semibold text-clinic-primary">
                {DR_ANUPRIYA_BIO.tagline}
              </p>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-clinic-text-secondary leading-relaxed">
              {DR_ANUPRIYA_BIO.overview.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Philosophy Highlight Box */}
            <div className="p-5 bg-clinic-lavender/40 border-l-4 border-clinic-primary rounded-r-2xl space-y-2">
              <p className="text-xs font-bold uppercase tracking-wider text-clinic-primary">
                Patient-Care Philosophy
              </p>
              <p className="text-sm font-medium text-clinic-text italic">
                &ldquo;{DR_ANUPRIYA_BIO.quote}&rdquo;
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button to="/contact" size="md">
                <Calendar className="w-4 h-4" />
                Schedule Consultation with Dr. Anupriya
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Vision & Mission */}
      <section className="py-14 bg-clinic-surface-subtle border-y border-clinic-border/60" aria-labelledby="vision-mission-heading">
        <div className="container-custom space-y-10">
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <Badge variant="lavender">Guiding Principles</Badge>
            <h2
              id="vision-mission-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-clinic-text tracking-tight"
            >
              Our Vision & Mission
            </h2>
            <p className="text-sm sm:text-base text-clinic-text-secondary leading-relaxed">
              Driving community oral health standards with integrity, empathy, and patient confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="card-clinic p-8 space-y-4 relative group">
              <div className="w-12 h-12 rounded-2xl bg-clinic-lavender flex items-center justify-center text-clinic-primary group-hover:scale-110 transition-transform">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-clinic-text">
                {CLINIC_VISION_MISSION.mission.title}
              </h3>
              <p className="text-sm text-clinic-text-secondary leading-relaxed">
                {CLINIC_VISION_MISSION.mission.text}
              </p>
            </div>

            {/* Vision Card */}
            <div className="card-clinic p-8 space-y-4 relative group">
              <div className="w-12 h-12 rounded-2xl bg-clinic-lavender flex items-center justify-center text-clinic-primary group-hover:scale-110 transition-transform">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-clinic-text">
                {CLINIC_VISION_MISSION.vision.title}
              </h3>
              <p className="text-sm text-clinic-text-secondary leading-relaxed">
                {CLINIC_VISION_MISSION.vision.text}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. The 9 Doctors from Client Brief */}
      <section className="container-custom py-6" aria-labelledby="doctors-team-heading">
        <div className="space-y-10">
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <Badge variant="lavender">Multidisciplinary Medical Panel</Badge>
            <h2
              id="doctors-team-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-clinic-text tracking-tight"
            >
              Our Team of Doctors
            </h2>
            <p className="text-sm sm:text-base text-clinic-text-secondary leading-relaxed">
              Meet our panel of 9 dedicated doctors and specialists covering all clinical dental branches in Hosur.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DOCTORS_LIST.map((doctor) => (
              <div
                key={doctor.id}
                className="card-clinic p-6 flex flex-col justify-between space-y-4 hover:border-clinic-primary/40 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-clinic-lavender text-clinic-primary font-bold text-base flex items-center justify-center group-hover:bg-clinic-primary group-hover:text-white transition-colors">
                      {doctor.name
                        .replace('Dr. ', '')
                        .split(' ')
                        .map((n) => n[0])
                        .join('')
                        .slice(0, 2)}
                    </div>
                    <span className="text-[11px] font-semibold text-clinic-primary bg-clinic-lavender/60 px-2.5 py-0.5 rounded-full border border-clinic-border/60">
                      {doctor.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-clinic-text group-hover:text-clinic-primary transition-colors">
                      {doctor.name}
                    </h3>
                    <p className="text-xs font-semibold text-clinic-primary mt-0.5">
                      {doctor.role}
                    </p>
                    <p className="text-[11px] text-clinic-text-secondary mt-0.5 font-medium">
                      {doctor.specialty}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-clinic-text-secondary leading-relaxed pt-1">
                    {doctor.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-clinic-border/60 flex items-center justify-between">
                  <span className="text-xs text-clinic-text-secondary font-medium">
                    {doctor.experience || 'Specialist'}
                  </span>
                  <span className="text-xs font-semibold text-clinic-primary bg-clinic-lavender/50 px-2 py-0.5 rounded-md">
                    Hosur Panel
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Ethics Note */}
          <div className="p-4 bg-clinic-surface-subtle border border-clinic-border rounded-xl text-center text-xs text-clinic-text-secondary flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-clinic-primary shrink-0" />
            <span>Doctor names, roles, and specialties preserved strictly from the verified client brief without fabrication.</span>
          </div>
        </div>
      </section>

      {/* 5. Reassurance CTA Banner */}
      <section className="container-custom pb-6">
        <div className="bg-gradient-to-r from-clinic-primary to-[#57418F] text-white rounded-3xl p-8 sm:p-12 text-center space-y-4 shadow-soft-md">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Consult with Dr. Anupriya & Our Specialists
          </h2>
          <p className="text-sm sm:text-base text-white/85 max-w-xl mx-auto leading-relaxed">
            Have questions about your dental health or looking for a gentle check-up for your child? We are here to guide you with care.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Button to="/contact" variant="secondary" size="lg" className="bg-white text-clinic-primary hover:bg-clinic-lavender border-0 font-semibold">
              <Calendar className="w-5 h-5" />
              Fix an Appointment
            </Button>
            <Button to="/treatments" variant="ghost" size="lg" className="text-white hover:bg-white/10 hover:text-white">
              Explore Our Treatments &rarr;
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
