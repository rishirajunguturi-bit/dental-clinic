export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  badge: string;
  highlights: string[];
}

export interface FeaturedTreatmentItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  highlights: string[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  patientName: string;
  role: string;
  rating: number;
}

export interface FacilityItem {
  id: string;
  title: string;
  description: string;
  badge: string;
  subtext: string;
}

export const WHY_CHOOSE_US: WhyChooseItem[] = [
  {
    id: 'all-in-one',
    title: 'All-in-One Care',
    description:
      'From preventive cleanings and pediatric dental check-ups to advanced orthodontic braces, clear aligners, and dental implants — receive full dental solutions under one roof.',
    badge: 'Comprehensive Services',
    highlights: ['Multi-specialty care in Hosur', 'Family dental records managed together'],
  },
  {
    id: 'experienced-doctors',
    title: 'Experienced Doctors',
    description:
      'Led by Dr. Anupriya with more than two decades of dedicated patient care, supported by an established panel of 9 specialist doctors covering all clinical branches.',
    badge: '20+ Years Excellence',
    highlights: ['Dedicated pediatric specialists', 'Experienced restorative & orthodontic panel'],
  },
  {
    id: 'patient-centric',
    title: 'Patient-Centric Approach',
    description:
      'We tailor treatment plans with warmth, empathy, and gentleness. Our priority is anxious patients, children, and senior citizens, ensuring transparent and comfortable visits.',
    badge: 'Compassionate Care',
    highlights: ['Stress-free pediatric appointments', 'Transparent treatment explanations'],
  },
  {
    id: 'technology-driven',
    title: 'Technology-Driven Services',
    description:
      'Equipped with modern laser dental tools, digital low-radiation imaging, class-B autoclave sterilization, and ergonomic clinical chairs for painless and precise treatment.',
    badge: 'Modern Equipment',
    highlights: ['Laser-assisted gum & whitening therapy', 'Hospital-grade sterilization standards'],
  },
];

export const FEATURED_TREATMENTS: FeaturedTreatmentItem[] = [
  {
    id: 'tooth-extraction',
    title: 'Tooth Extraction',
    subtitle: 'Surgical & Gentle Removal',
    description:
      'When tooth extraction is essential, our experienced dental team performs extractions using advanced local anesthesia protocols tailored for minimal discomfort and smooth healing.',
    tag: 'Safe & Gentle',
    highlights: ['Painless anesthesia application', 'Rapid recovery guidance'],
  },
  {
    id: 'artificial-complete-denture',
    title: 'Artificial Complete Denture',
    subtitle: 'Restorative Prosthetics',
    description:
      'Custom-crafted full dentures fabricated using premium, lightweight biocompatible materials that restore complete chewing capability, oral comfort, and natural facial contours.',
    tag: 'Senior Friendly',
    highlights: ['Ergonomic natural fit', 'High durability & lightweight materials'],
  },
  {
    id: 'tooth-filling',
    title: 'Tooth Filling',
    subtitle: 'Restorative Dental Care',
    description:
      'We restore chipped, cracked, or decayed teeth using high-grade tooth-colored composite resins that blend seamlessly with your natural tooth shade while preserving tooth structure.',
    tag: 'Natural Appearance',
    highlights: ['Exact tooth-matching shade', 'Long-lasting cavity protection'],
  },
  {
    id: 'teeth-cleaning-scaling',
    title: 'Teeth Cleaning or Scaling',
    subtitle: 'Preventive & Gum Care',
    description:
      'Gentle ultrasonic and modern scaling that removes stubborn plaque, deep tartar, and bacterial buildup along the gumline to protect against gingivitis and refresh your breath.',
    tag: 'Preventive Health',
    highlights: ['Ultrasonic tartar clearance', 'Fresh breath & healthy gums'],
  },
  {
    id: 'bleaching',
    title: 'Bleaching (Teeth Whitening)',
    subtitle: 'Cosmetic Dentistry',
    description:
      'Professional, enamel-safe bleaching treatments that safely eliminate stubborn discoloration caused by coffee, tea, and aging, brightening your smile noticeably in a single session.',
    tag: 'Enamel Safe',
    highlights: ['Visibly brighter smile', 'Clinically monitored treatment'],
  },
  {
    id: 'orthodontic-treatment',
    title: 'Orthodontic Treatment',
    subtitle: 'Braces & Smile Alignment',
    description:
      'Tailored orthodontic correction utilizing ceramic braces, traditional brackets, or modern clear aligners to correct crowding, crossbites, and misalignments for children and adults.',
    tag: 'Teens & Adults',
    highlights: ['Precise bite correction', 'Discreet ceramic & clear aligner options'],
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't-1',
    patientName: 'Manisha M',
    role: 'Orthodontic Patient',
    quote: 'The doctors are extremely kind and attentive. My braces treatment is progressing really well. 5/5.',
    rating: 5,
  },
  {
    id: 't-2',
    patientName: 'Mr. Arun Kumar',
    role: 'Cosmetic Dental Patient',
    quote:
      'I got my teeth cleaned and whitened here, and the results were amazing. The staff is so humble and professional. I’ve recommended Sakthi Dental Clinic to my entire family.',
    rating: 5,
  },
  {
    id: 't-3',
    patientName: 'Mrs. Revathi S.',
    role: 'Parent of Pediatric Patient',
    quote:
      'Their attention to detail is outstanding. My daughter needed braces and the entire process from consultation to regular follow ups has been so smooth. Really grateful for their care.',
    rating: 5,
  },
];

export const CLINIC_FACILITIES: FacilityItem[] = [
  {
    id: 'location',
    title: 'Convenient Central Location',
    description:
      'Located in SBM Layout, Anthivadi, right in central Hosur with direct road connectivity and effortless transit from residential and commercial areas.',
    badge: 'Anthivadi, Hosur',
    subtext: 'B2/8, SBM Layout, Anthivadi, Hosur, Tamil Nadu 635109',
  },
  {
    id: 'parking',
    title: 'Hassle-Free Parking',
    description:
      'Dedicated on-site parking spaces for both two-wheelers and four-wheelers, making clinic visits easy for visiting families and elderly patients.',
    badge: 'Free Parking',
    subtext: 'Dedicated visitor 2/4-wheeler parking',
  },
  {
    id: 'hours',
    title: 'Doctors Available Daily',
    description:
      'Doctors and clinical specialists available 7 days a week, Monday through Sunday, ensuring continuous patient support and scheduled care.',
    badge: 'Open 7 Days',
    subtext: 'Daily service: 9:00 AM – 7:00 PM (Amenities: up to 9:00 PM)',
  },
  {
    id: 'pickup-drop',
    title: 'Pickup and Drop-Off Support',
    description:
      'Special assistance and local transit coordination for senior citizens, expectant mothers, and patients with limited mobility.',
    badge: 'Senior Assistance',
    subtext: 'Transit coordination for elder patients',
  },
  {
    id: 'wheelchair',
    title: 'Wheelchair Access',
    description:
      'Ground-floor clinic suites with ramp entrances and wide, step-free corridors designed for complete wheelchair and stroller accessibility.',
    badge: 'Barrier-Free',
    subtext: 'Ramp entrance & ground floor consultation suites',
  },
];

export const HERO_STATS = [
  { label: 'Years of Experience', value: '20+' },
  { label: 'Happy Patient Smiles', value: '15,000+' },
  { label: 'Specialist Doctors', value: '9' },
  { label: 'Patient Comfort Focus', value: '100%' },
];
