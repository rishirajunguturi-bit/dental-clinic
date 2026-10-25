import React from 'react';
import { MapPin, Phone, Mail, Clock, AlertTriangle, ExternalLink, Sparkles } from 'lucide-react';
import { Badge } from '../components/common/Badge';
import { ContactForm } from '../components/forms/ContactForm';
import { CLINIC_INFO } from '../data/clinicInfo';

export const ContactPage: React.FC = () => {
  return (
    <div className="space-y-12 py-8">
      {/* 1. Header Banner */}
      <section className="container-custom" aria-labelledby="contact-heading">
        <div className="bg-gradient-to-br from-clinic-lavender/80 via-white to-clinic-lavender/30 border border-clinic-border rounded-3xl p-8 sm:p-12 lg:p-14 shadow-soft-sm">
          <div className="max-w-3xl space-y-4">
            <Badge variant="lavender" className="gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-clinic-primary" />
              Get in Touch with Sakthi Dental Clinic
            </Badge>
            <h1
              id="contact-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-clinic-text tracking-tight leading-tight"
            >
              Contact Our Dental Clinic in{' '}
              <span className="text-clinic-primary">Hosur</span>
            </h1>
            <p className="text-base sm:text-lg text-clinic-text-secondary leading-relaxed">
              Have questions or want to fix an appointment? Visit our clinic in Anthivadi, call our doctors, or fill out the inquiry form below.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Responsive Two-Column Layout */}
      <section className="container-custom" aria-label="Contact Details and Form">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Clinic Contact Details & Map Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="card-clinic p-6 sm:p-8 space-y-6">
              <div className="space-y-1">
                <h2 className="text-xl font-bold text-clinic-text">
                  Clinic Location & Hours
                </h2>
                <p className="text-xs text-clinic-text-secondary">
                  Centrally located in Hosur with convenient road access and parking.
                </p>
              </div>

              <div className="space-y-5 text-sm">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-clinic-lavender flex items-center justify-center text-clinic-primary shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <strong className="block text-clinic-text text-sm">Clinic Address</strong>
                    <p className="text-xs sm:text-sm text-clinic-text-secondary leading-relaxed">
                      {CLINIC_INFO.address.full}
                    </p>
                    <a
                      href="https://maps.google.com/?q=B2/8,+SBM+Layout,+Anthivadi,+Hosur,+Tamil+Nadu+635109"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-clinic-primary hover:underline inline-flex items-center gap-1 pt-1"
                    >
                      View on Google Maps
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-clinic-lavender flex items-center justify-center text-clinic-primary shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <strong className="block text-clinic-text text-sm">Phone Numbers</strong>
                    <div className="text-xs sm:text-sm text-clinic-text-secondary flex flex-col gap-1">
                      <a href={`tel:${CLINIC_INFO.phoneNumbers[0].replace(/\s+/g, '')}`} className="hover:text-clinic-primary font-medium">
                        {CLINIC_INFO.phoneNumbers[0]}
                      </a>
                      <a href={`tel:${CLINIC_INFO.phoneNumbers[1].replace(/\s+/g, '')}`} className="hover:text-clinic-primary font-medium">
                        {CLINIC_INFO.phoneNumbers[1]}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-clinic-lavender flex items-center justify-center text-clinic-primary shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <strong className="block text-clinic-text text-sm">Email Address</strong>
                    <a href={`mailto:${CLINIC_INFO.email}`} className="text-xs sm:text-sm text-clinic-text-secondary hover:text-clinic-primary block font-medium">
                      {CLINIC_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex items-start gap-3.5 pt-2 border-t border-clinic-border/60">
                  <div className="w-9 h-9 rounded-xl bg-clinic-lavender flex items-center justify-center text-clinic-primary shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <strong className="block text-clinic-text text-sm">Operating Timings</strong>
                    <p className="text-xs sm:text-sm text-clinic-text-secondary font-medium">
                      Sunday to Saturday: 9:00 AM – 7:00 PM
                    </p>

                    {/* Discrepancy Flag as per prompt instructions */}
                    <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 space-y-1 mt-2">
                      <div className="flex items-center gap-1.5 font-bold text-amber-800">
                        <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                        Operating Hours Note:
                      </div>
                      <p className="leading-relaxed text-[11px]">
                        The Contact page lists timings as 9:00 AM – 7:00 PM, while the Clinic Amenities brief states 9:00 AM – 9:00 PM. We recommend calling ahead for evening appointments after 7:00 PM.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Transport & Parking Note */}
            <div className="p-5 bg-clinic-lavender/50 rounded-2xl border border-clinic-border/70 text-xs text-clinic-text-secondary space-y-1">
              <strong className="text-clinic-text block">Parking & Accessibility:</strong>
              <p>
                Free dedicated 2-wheeler and 4-wheeler parking is available directly in front of the clinic. Wheelchair access is provided via ground-floor ramp entrances.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
