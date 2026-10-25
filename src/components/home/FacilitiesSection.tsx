import React from 'react';
import { MapPin, Car, Clock, HeartHandshake, Accessibility, AlertCircle } from 'lucide-react';
import { Badge } from '../common/Badge';
import { CLINIC_FACILITIES } from '../../data/homeData';

export const FacilitiesSection: React.FC = () => {
  const getFacilityIcon = (id: string) => {
    switch (id) {
      case 'location':
        return <MapPin className="w-5 h-5 text-clinic-primary" />;
      case 'parking':
        return <Car className="w-5 h-5 text-clinic-primary" />;
      case 'hours':
        return <Clock className="w-5 h-5 text-clinic-primary" />;
      case 'pickup-drop':
        return <HeartHandshake className="w-5 h-5 text-clinic-primary" />;
      case 'wheelchair':
        return <Accessibility className="w-5 h-5 text-clinic-primary" />;
      default:
        return <MapPin className="w-5 h-5 text-clinic-primary" />;
    }
  };

  return (
    <section className="py-14" aria-labelledby="facilities-heading">
      <div className="container-custom space-y-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <Badge variant="lavender">Patient Comfort & Amenities</Badge>
          <h2
            id="facilities-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-clinic-text tracking-tight"
          >
            Clinic Facilities & Amenities
          </h2>
          <p className="text-sm sm:text-base text-clinic-text-secondary leading-relaxed">
            We ensure every aspect of your visit is seamless, barrier-free, and comfortable for the entire family.
          </p>
        </div>

        {/* 5 Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLINIC_FACILITIES.map((facility) => (
            <div
              key={facility.id}
              className="card-clinic p-6 space-y-4 hover:border-clinic-primary/40 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-clinic-lavender flex items-center justify-center">
                    {getFacilityIcon(facility.id)}
                  </div>
                  <span className="text-[11px] font-semibold text-clinic-primary bg-clinic-lavender/60 px-2.5 py-0.5 rounded-full border border-clinic-border/60">
                    {facility.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-clinic-text">
                  {facility.title}
                </h3>

                <p className="text-xs sm:text-sm text-clinic-text-secondary leading-relaxed">
                  {facility.description}
                </p>
              </div>

              <div className="pt-3 border-t border-clinic-border/60 text-xs font-medium text-clinic-text/80">
                {facility.subtext}
              </div>
            </div>
          ))}

          {/* Operating hours note card */}
          <div className="card-clinic p-6 bg-gradient-to-br from-clinic-lavender/40 to-white flex flex-col justify-between space-y-3 border-dashed border-clinic-primary/40">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-clinic-primary">
                <AlertCircle className="w-4 h-4" />
                Operating Hours Advisory
              </div>
              <h3 className="text-sm font-bold text-clinic-text">
                Sunday to Saturday Consultations
              </h3>
              <p className="text-xs text-clinic-text-secondary leading-relaxed">
                Contact desk lists 9:00 AM – 7:00 PM, while amenity availability extends up to 9:00 PM. We recommend calling ahead or booking in advance for late evening visits.
              </p>
            </div>
            <div className="text-xs font-semibold text-clinic-primary">
              Call: +91 9862890897 / +91 9363298118
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
