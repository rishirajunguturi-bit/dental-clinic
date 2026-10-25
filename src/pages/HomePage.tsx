import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { AssuranceBanner } from '../components/home/AssuranceBanner';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { FeaturedTreatments } from '../components/home/FeaturedTreatments';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { FacilitiesSection } from '../components/home/FacilitiesSection';
import { FinalCtaSection } from '../components/home/FinalCtaSection';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-6 sm:space-y-10">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Assurance Banner */}
      <AssuranceBanner />

      {/* 3. Why Choose Sakthi Dental Clinic */}
      <WhyChooseUs />

      {/* 4. Featured Treatments Section (6 Treatments + Link to /treatments) */}
      <FeaturedTreatments />

      {/* 5. Patient Testimonials (3 Client Brief Testimonials) */}
      <TestimonialsSection />

      {/* 6. Clinic Facilities & Amenities */}
      <FacilitiesSection />

      {/* 7. Final Appointment CTA */}
      <FinalCtaSection />
    </div>
  );
};

export default HomePage;
