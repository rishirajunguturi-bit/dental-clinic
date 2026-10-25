import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Phone, MapPin, Calendar, Clock } from 'lucide-react';
import { CLINIC_INFO, NAV_ITEMS } from '../../data/clinicInfo';
import { Button } from '../common/Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-clinic-border transition-all">
      {/* Top micro-bar for quick contact and location */}
      <div className="bg-clinic-lavender/60 border-b border-clinic-border/50 text-xs text-clinic-text-secondary py-1.5 px-4 hidden md:block">
        <div className="container-custom flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-clinic-primary" aria-hidden="true" />
              Anthivadi, Hosur, Tamil Nadu 635109
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-clinic-primary" aria-hidden="true" />
              Mon – Sun: 9:00 AM – 7:00 PM / 9:00 PM
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 font-medium text-clinic-text">
              <Phone className="w-3.5 h-3.5 text-clinic-primary" aria-hidden="true" />
              <a href={`tel:${CLINIC_INFO.phoneNumbers[0].replace(/\s+/g, '')}`} className="hover:text-clinic-primary transition-colors">
                {CLINIC_INFO.phoneNumbers[0]}
              </a>
              <span className="text-clinic-border">|</span>
              <a href={`tel:${CLINIC_INFO.phoneNumbers[1].replace(/\s+/g, '')}`} className="hover:text-clinic-primary transition-colors">
                {CLINIC_INFO.phoneNumbers[1]}
              </a>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container-custom py-3.5">
        <div className="flex items-center justify-between">
          {/* Clinic Brand */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clinic-primary rounded-lg"
            aria-label="Sakthi Dental Clinic - Return to Home"
          >
            <div className="w-10 h-10 rounded-xl bg-clinic-primary flex items-center justify-center text-white shadow-soft-sm group-hover:bg-clinic-primary-hover transition-colors">
              <svg className="w-6 h-6" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 10C18 10 14 14 14 19C14 24 16 28 18 34C19 37 21 38 22 36C23 34 23 29 24 29C25 29 25 34 26 36C27 38 29 37 30 34C32 28 34 24 34 19C34 14 30 10 24 10Z" fill="currentColor"/>
                <circle cx="33" cy="14" r="3" fill="#F3EEFF"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-clinic-text tracking-tight group-hover:text-clinic-primary transition-colors">
                Sakthi Dental Clinic
              </span>
              <span className="text-xs font-medium text-clinic-text-secondary">
                Hosur, Tamil Nadu
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-clinic-primary bg-clinic-lavender font-semibold'
                      : 'text-clinic-text hover:text-clinic-primary hover:bg-clinic-lavender/50'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Header Action Button (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <Button to="/contact" size="md">
              <Calendar className="w-4 h-4" aria-hidden="true" />
              Fix an Appointment
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={toggleMenu}
              className="p-2.5 rounded-xl border border-clinic-border text-clinic-text hover:bg-clinic-lavender/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clinic-primary"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Navigation */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-3 border-t border-clinic-border mt-3 animate-fadeIn">
            <nav className="flex flex-col gap-1 pb-4" aria-label="Mobile Navigation">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
                      isActive
                        ? 'text-clinic-primary bg-clinic-lavender font-semibold'
                        : 'text-clinic-text hover:bg-clinic-lavender/40 hover:text-clinic-primary'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="pt-3 border-t border-clinic-border/60 flex flex-col gap-3">
              <Button to="/contact" fullWidth onClick={closeMenu}>
                <Calendar className="w-4 h-4" aria-hidden="true" />
                Fix an Appointment
              </Button>
              <div className="text-xs text-clinic-text-secondary px-1 flex flex-col gap-1">
                <span className="font-medium text-clinic-text">Call for appointments:</span>
                <div className="flex gap-3">
                  <a href={`tel:${CLINIC_INFO.phoneNumbers[0].replace(/\s+/g, '')}`} className="text-clinic-primary hover:underline">
                    {CLINIC_INFO.phoneNumbers[0]}
                  </a>
                  <span>•</span>
                  <a href={`tel:${CLINIC_INFO.phoneNumbers[1].replace(/\s+/g, '')}`} className="text-clinic-primary hover:underline">
                    {CLINIC_INFO.phoneNumbers[1]}
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
