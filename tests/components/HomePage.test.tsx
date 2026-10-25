import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { HomePage } from '../../src/pages/HomePage';

describe('HomePage Component', () => {
  it('renders all required Home page sections in correct sequence', () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );

    // 1. Hero section
    expect(
      screen.getByRole('heading', {
        name: /Specialized Dental Care for Women, Children & Families/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Experience compassionate, expert-led dental services/i)
    ).toBeInTheDocument();

    // 2. Assurance banner
    expect(screen.getByText(/You are always in safe hands/i)).toBeInTheDocument();
    expect(screen.getByText(/We are ready to help, anytime/i)).toBeInTheDocument();

    // 3. Why Choose Us (4 features)
    expect(screen.getByText('All-in-One Care')).toBeInTheDocument();
    expect(screen.getByText('Experienced Doctors')).toBeInTheDocument();
    expect(screen.getByText('Patient-Centric Approach')).toBeInTheDocument();
    expect(screen.getByText('Technology-Driven Services')).toBeInTheDocument();

    // 4. Featured Treatments (6 treatments)
    expect(screen.getByText('Tooth Extraction')).toBeInTheDocument();
    expect(screen.getByText('Artificial Complete Denture')).toBeInTheDocument();
    expect(screen.getByText('Tooth Filling')).toBeInTheDocument();
    expect(screen.getByText('Teeth Cleaning or Scaling')).toBeInTheDocument();
    expect(screen.getByText('Bleaching (Teeth Whitening)')).toBeInTheDocument();
    expect(screen.getByText('Orthodontic Treatment')).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /View Full List of Treatments/i })
    ).toBeInTheDocument();

    // 5. Testimonials (3 client reviews)
    expect(screen.getByText('Manisha M')).toBeInTheDocument();
    expect(screen.getByText('Mr. Arun Kumar')).toBeInTheDocument();
    expect(screen.getByText('Mrs. Revathi S.')).toBeInTheDocument();

    // 6. Clinic Facilities
    expect(screen.getByText('Convenient Central Location')).toBeInTheDocument();
    expect(screen.getByText('Hassle-Free Parking')).toBeInTheDocument();
    expect(screen.getByText('Doctors Available Daily')).toBeInTheDocument();
    expect(screen.getByText('Pickup and Drop-Off Support')).toBeInTheDocument();
    expect(screen.getByText('Wheelchair Access')).toBeInTheDocument();

    // 7. Final CTA
    expect(
      screen.getByRole('heading', {
        name: /Ready to Experience Compassionate, Expert-Led Dental Care\?/i,
      })
    ).toBeInTheDocument();
  });
});
