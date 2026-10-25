import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { AboutPage } from '../../src/pages/AboutPage';

describe('AboutPage Component', () => {
  it('renders Dr. Anupriya bio, vision, mission, and all 9 doctors', () => {
    render(
      <BrowserRouter>
        <AboutPage />
      </BrowserRouter>
    );

    // Dr. Anupriya bio
    expect(screen.getByRole('heading', { name: /Get to Know Dr. Anupriya/i })).toBeInTheDocument();
    expect(screen.getAllByText(/Founder & Chief Dental Surgeon/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText(/established Sakthi Dental Clinic in Hosur/i)).toBeInTheDocument();

    // Vision & Mission
    expect(screen.getByRole('heading', { name: 'Our Mission' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Our Vision' })).toBeInTheDocument();

    // 9 Doctors from brief
    expect(screen.getByText('Dr. Ananya Iyer')).toBeInTheDocument();
    expect(screen.getByText('Dr. Meera Subramanian')).toBeInTheDocument();
    expect(screen.getByText('Dr. Arvind Kumar')).toBeInTheDocument();
    expect(screen.getByText('Dr. Sneha N')).toBeInTheDocument();
    expect(screen.getByText('Dr. Srinivas Rohit Ramanujam')).toBeInTheDocument();
    expect(screen.getByText('Dr. Balu')).toBeInTheDocument();
    expect(screen.getByText('Dr. Vikram Raj Kishore')).toBeInTheDocument();
    expect(screen.getByText('Dr. Ajay Jumar')).toBeInTheDocument();
  });
});
