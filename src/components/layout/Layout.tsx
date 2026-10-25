import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-clinic-bg text-clinic-text antialiased">
      {/* Accessible skip link for keyboard & screen reader users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-clinic-primary text-white rounded-lg shadow-soft-lg font-medium outline-none ring-2 ring-white"
      >
        Skip to main content
      </a>

      {/* Main header navigation */}
      <Navbar />

      {/* Primary page outlet */}
      <main id="main-content" className="flex-1 focus:outline-none">
        <Outlet />
      </main>

      {/* Global clinic footer */}
      <Footer />
    </div>
  );
};
