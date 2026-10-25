import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Layout } from '../../src/components/layout/Layout';

describe('Layout Component', () => {
  it('renders skip link, navbar, main outlet, and footer', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<div data-testid="test-content">Test Outlet Content</div>} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    // Verify skip to main content link
    expect(screen.getByRole('link', { name: /Skip to main content/i })).toBeInTheDocument();

    // Verify outlet content is rendered inside main
    expect(screen.getByTestId('test-content')).toBeInTheDocument();

    // Verify footer elements
    expect(screen.getByText(/All rights reserved/i)).toBeInTheDocument();
    expect(screen.getByText(/ShadowFox Intermediate Web Assignment/i)).toBeInTheDocument();
  });
});
