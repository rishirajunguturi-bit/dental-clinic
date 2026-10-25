import { ClinicInfo, NavItem } from '../types';

export const CLINIC_INFO: ClinicInfo = {
  name: 'Sakthi Dental Clinic',
  tagline: 'Specialized Dental Care for Women, Children & Families',
  address: {
    line1: 'B2/8, SBM Layout',
    line2: 'Anthivadi',
    city: 'Hosur',
    state: 'Tamil Nadu',
    pincode: '635109',
    country: 'India',
    full: 'B2/8, SBM Layout, Anthivadi, Hosur, Tamil Nadu 635109, India',
  },
  phoneNumbers: ['+91 9862890897', '+91 9363298118'],
  email: 'info@sakthidentalclinic.in',
  operatingHours: {
    contactHours: 'Sunday to Saturday, 9:00 AM – 7:00 PM',
    amenitiesHours: '9:00 AM – 9:00 PM',
    note: 'Operating hours require confirmation due to conflicting timings in client source materials (9 AM–7 PM on Contact page vs 9 AM–9 PM in Amenities section).',
  },
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Treatments', href: '/treatments' },
  { label: 'FAQs', href: '/faqs' },
  { label: 'Contact Us', href: '/contact' },
];

export const FOOTER_TREATMENTS = [
  'Teeth Cleaning & Scaling',
  'Tooth Extraction',
  'Tooth Filling',
  'Artificial Complete Denture',
  'Root Canal Therapy',
  'Orthodontic Braces',
  'Clear Aligners',
  'Pediatric Dentistry',
];
