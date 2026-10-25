import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ContactForm } from '../../src/components/forms/ContactForm';

describe('ContactForm Component', () => {
  it('validates required fields on empty submit', async () => {
    render(<ContactForm />);

    const submitBtn = screen.getByRole('button', { name: /Submit Inquire/i });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText(/Full name is required/i)).toBeInTheDocument();
      expect(screen.getByText(/Email address is required/i)).toBeInTheDocument();
      expect(screen.getByText(/Phone number is required/i)).toBeInTheDocument();
    });
  });

  it('validates invalid email format', async () => {
    render(<ContactForm />);

    const emailInput = screen.getByLabelText(/Email Address/i);
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });

    const submitBtn = screen.getByRole('button', { name: /Submit Inquire/i });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText(/Please enter a valid email address/i)).toBeInTheDocument();
    });
  });
});
