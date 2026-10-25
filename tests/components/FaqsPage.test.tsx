import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { FaqsPage } from '../../src/pages/FaqsPage';

describe('FaqsPage Component', () => {
  it('renders FAQ questions and supports accordion toggle', () => {
    render(
      <BrowserRouter>
        <FaqsPage />
      </BrowserRouter>
    );

    // Verify presence of questions
    const q1 = screen.getByText(/Can medication completely relieve tooth pain\?/i);
    expect(q1).toBeInTheDocument();

    const q2 = screen.getByText(/Does teeth scaling cause enamel damage/i);
    expect(q2).toBeInTheDocument();

    // Verify answer is rendered
    expect(
      screen.getByText(/While medications may offer short-term relief/i)
    ).toBeInTheDocument();

    // Test Expand All button
    const expandAllBtn = screen.getByRole('button', { name: /Expand All/i });
    fireEvent.click(expandAllBtn);

    expect(
      screen.getByText(/Braces are most effective between ages 12 and 14/i)
    ).toBeInTheDocument();
  });
});
