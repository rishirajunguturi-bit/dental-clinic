import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Heart, ShieldAlert } from 'lucide-react';
import { CLINIC_INFO, NAV_ITEMS, FOOTER_TREATMENTS } from '../../data/clinicInfo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-clinic-text text-white/90 pt-14 pb-8 border-t border-clinic-border">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Clinic Brand & Overview */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-clinic-primary flex items-center justify-center text-white">
                <svg className="w-6 h-6" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 10C18 10 14 14 14 19C14 24 16 28 18 34C19 37 21 38 22 36C23 34 23 29 24 29C25 29 25 34 26 36C27 38 29 37 30 34C32 28 34 24 34 19C34 14 30 10 24 10Z" fill="currentColor"/>
                  <circle cx="33" cy="14" r="3" fill="#F3EEFF"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">Sakthi Dental Clinic</h3>
                <p className="text-xs text-white/60">Hosur, Tamil Nadu</p>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Specialized, compassionate dental care tailored for women, children, and families.
              Delivering expert-led treatments in a gentle and welcoming environment.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 text-xs text-clinic-lavender/90 bg-white/10 px-3 py-1.5 rounded-lg">
                <Heart className="w-3.5 h-3.5 text-clinic-primary" />
                Comprehensive Family Dental Care
              </span>
            </div>
            {/* Verified social and navigation touchpoints */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://maps.google.com/?q=B2/8,+SBM+Layout,+Anthivadi,+Hosur,+Tamil+Nadu+635109"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-clinic-primary flex items-center justify-center text-white transition-colors"
                aria-label="Find Sakthi Dental Clinic on Google Maps"
              >
                <MapPin className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/919862890897?text=Hello%20Sakthi%20Dental%20Clinic,%20I%20would%20like%20to%20inquire%20about%20an%20appointment`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-clinic-primary flex items-center justify-center text-white transition-colors"
                aria-label="Chat with Sakthi Dental Clinic on WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${CLINIC_INFO.email}`}
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-clinic-primary flex items-center justify-center text-white transition-colors"
                aria-label="Send Email to Sakthi Dental Clinic"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="hover:text-clinic-lavender transition-colors inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/privacy-policy"
                  className="hover:text-clinic-lavender transition-colors inline-block"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Key Treatments */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Key Treatments
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              {FOOTER_TREATMENTS.slice(0, 6).map((treatment) => (
                <li key={treatment}>
                  <Link
                    to="/treatments"
                    className="hover:text-clinic-lavender transition-colors line-clamp-1"
                  >
                    {treatment}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  to="/treatments"
                  className="text-xs text-clinic-lavender hover:underline font-medium inline-flex items-center gap-1"
                >
                  View all 15 treatments &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Visit or Contact Us
            </h4>
            <div className="flex items-start gap-3 text-sm text-white/80">
              <MapPin className="w-4 h-4 text-clinic-primary shrink-0 mt-1" aria-hidden="true" />
              <span>{CLINIC_INFO.address.full}</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-white/80">
              <Phone className="w-4 h-4 text-clinic-primary shrink-0" aria-hidden="true" />
              <div className="flex flex-col">
                <a href={`tel:${CLINIC_INFO.phoneNumbers[0].replace(/\s+/g, '')}`} className="hover:text-clinic-lavender">
                  {CLINIC_INFO.phoneNumbers[0]}
                </a>
                <a href={`tel:${CLINIC_INFO.phoneNumbers[1].replace(/\s+/g, '')}`} className="hover:text-clinic-lavender">
                  {CLINIC_INFO.phoneNumbers[1]}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm text-white/80">
              <Mail className="w-4 h-4 text-clinic-primary shrink-0" aria-hidden="true" />
              <a href={`mailto:${CLINIC_INFO.email}`} className="hover:text-clinic-lavender truncate">
                {CLINIC_INFO.email}
              </a>
            </div>
            <div className="flex items-start gap-3 text-xs text-white/60 pt-1">
              <Clock className="w-4 h-4 text-clinic-primary shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="font-medium text-white/80">Clinic Hours:</p>
                <p>Sunday – Saturday: 9:00 AM – 7:00 PM</p>
                <p className="text-[11px] text-white/50 italic mt-0.5">(Amenities: up to 9:00 PM — subject to doctor availability)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <p>
            &copy; {new Date().getFullYear()} Sakthi Dental Clinic. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <span className="inline-flex items-center gap-1">
              <ShieldAlert className="w-3.5 h-3.5 text-clinic-lavender/70" />
              ShadowFox Intermediate Web Assignment
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
