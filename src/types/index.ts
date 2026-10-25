export interface NavItem {
  label: string;
  href: string;
}

export interface Doctor {
  id: string;
  name: string;
  role: string;
  experience?: string;
  bio?: string;
  specialties?: string[];
  image?: string;
}

export interface Treatment {
  id: string;
  title: string;
  description: string;
  iconName?: string;
  isFeatured?: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  patientName: string;
  context?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface ClinicInfo {
  name: string;
  tagline: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    full: string;
  };
  phoneNumbers: string[];
  email: string;
  operatingHours: {
    contactHours: string;
    amenitiesHours: string;
    note?: string;
  };
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message?: string;
}
