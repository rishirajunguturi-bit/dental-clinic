import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from '../../src/components/layout/Navbar';

describe('Navbar Component', () => {
  it('renders clinic branding and navigation links', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    // Verify brand name
    expect(screen.getByText('Sakthi Dental Clinic')).toBeInTheDocument();
    expect(screen.getByText('Hosur, Tamil Nadu')).toBeInTheDocument();

    // Verify navigation links
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'About Us' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Treatments' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'FAQs' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Contact Us' })).toBeInTheDocument();

    // Verify CTA button in header
    expect(screen.getByRole('link', { name: /Fix an Appointment/i })).toBeInTheDocument();
  });
});
