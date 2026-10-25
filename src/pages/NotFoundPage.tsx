import React from 'react';
import { Home } from 'lucide-react';
import { Button } from '../components/common/Button';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="container-custom py-20 flex flex-col items-center justify-center text-center space-y-6">
      <div className="w-16 h-16 rounded-2xl bg-clinic-lavender text-clinic-primary flex items-center justify-center font-bold text-2xl">
        404
      </div>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-clinic-text">
        Page Not Found
      </h1>
      <p className="text-clinic-text-secondary max-w-md text-sm sm:text-base">
        The page you are looking for doesn't exist or may have been moved. Let's get you back on track.
      </p>
      <div className="flex items-center gap-3 pt-2">
        <Button to="/" size="md">
          <Home className="w-4 h-4" />
          Back to Home
        </Button>
        <Button to="/contact" variant="secondary" size="md">
          Contact Clinic
        </Button>
      </div>
    </div>
  );
};
