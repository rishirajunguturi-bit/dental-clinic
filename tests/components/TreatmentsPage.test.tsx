import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { TreatmentsPage } from '../../src/pages/TreatmentsPage';

describe('TreatmentsPage Component', () => {
  it('renders all 15 treatments from the brief', () => {
    render(
      <BrowserRouter>
        <TreatmentsPage />
      </BrowserRouter>
    );

    // Verify key treatments are rendered
    expect(screen.getByRole('heading', { name: 'Teeth Cleaning & Scaling' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Tooth Filling' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Tooth Extraction' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Artificial Complete Denture' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Dental Implants' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Laser Dentistry' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Root Canal Therapy' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Wisdom Tooth Extraction' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Fixed Partial Denture (Bridge)' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Teeth Whitening (Bleaching)' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Veneers' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Pediatric Dentistry' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Flap Surgery' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Orthodontic Braces' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Clear Aligners' })).toBeInTheDocument();
  });
});
