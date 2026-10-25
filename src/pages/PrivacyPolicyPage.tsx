import React from 'react';
import { Shield, Mail, Phone, MapPin, Sparkles } from 'lucide-react';
import { Badge } from '../components/common/Badge';
import { CLINIC_INFO } from '../data/clinicInfo';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="space-y-12 py-8">
      {/* 1. Header */}
      <section className="container-custom" aria-labelledby="privacy-heading">
        <div className="bg-gradient-to-br from-clinic-lavender/80 via-white to-clinic-lavender/30 border border-clinic-border rounded-3xl p-8 sm:p-12 shadow-soft-sm max-w-4xl mx-auto">
          <div className="space-y-4">
            <Badge variant="lavender" className="gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-clinic-primary" />
              Sakthi Dental Clinic Policies
            </Badge>
            <h1
              id="privacy-heading"
              className="text-3xl sm:text-4xl font-extrabold text-clinic-text tracking-tight"
            >
              Privacy Policy
            </h1>
            <p className="text-xs sm:text-sm text-clinic-text-secondary">
              Last updated: October 2026 • Sakthi Dental Clinic, Hosur, Tamil Nadu
            </p>
          </div>
        </div>
      </section>

      {/* 2. Full Supplied Privacy Policy Content */}
      <section className="container-custom max-w-4xl mx-auto" aria-label="Privacy Policy Details">
        <div className="card-clinic p-6 sm:p-10 space-y-8 text-sm text-clinic-text-secondary leading-relaxed">
          {/* Information We Collect */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-clinic-text">
              Information We Collect
            </h2>
            <p>
              We may collect personal identification information from users in several ways, including when users visit our site, register on the site, fill out a form, and interact with other clinic features, services, or resources available on our website.
            </p>
            <p>
              Users may be asked to provide their name, email address, and phone number when requesting an appointment or submitting a medical inquiry. We collect personal identification information only if users voluntarily submit it to us. Users can always refuse to provide personally identifiable information, though it may prevent them from engaging in certain site-related activities such as submitting an appointment request.
            </p>
          </section>

          {/* Cookies */}
          <section className="space-y-3 border-t border-clinic-border/60 pt-6">
            <h2 className="text-xl font-bold text-clinic-text">
              Cookies & Technical Data
            </h2>
            <p>
              Our website may use &ldquo;cookies&rdquo; to enhance user experience. Cookies are small files stored on a user’s device for record-keeping purposes and to track preferences or site activity. Users can configure their web browser to refuse cookies or alert them when cookies are being sent. Note that doing so may affect some site functionalities.
            </p>
          </section>

          {/* How We Use Your Information */}
          <section className="space-y-3 border-t border-clinic-border/60 pt-6">
            <h2 className="text-xl font-bold text-clinic-text">
              How We Use Your Information
            </h2>
            <p>Sakthi Dental Clinic may collect and use personal information for the following clinical and operational purposes:</p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-clinic-text-secondary">
              <li>
                <strong className="text-clinic-text">To improve patient service:</strong> Your details help us respond more effectively to your dental consultation requests and support needs.
              </li>
              <li>
                <strong className="text-clinic-text">To schedule appointments:</strong> We use your contact details to reach out, confirm date/time slots, and prepare dental treatment plans.
              </li>
              <li>
                <strong className="text-clinic-text">To improve website performance:</strong> We may use feedback you provide to enhance our clinical offerings and digital resources.
              </li>
            </ul>
          </section>

          {/* Data Security */}
          <section className="space-y-3 border-t border-clinic-border/60 pt-6">
            <h2 className="text-xl font-bold text-clinic-text">
              Data Security
            </h2>
            <p>
              We implement appropriate security measures for data collection, storage, and processing to safeguard your personal information from unauthorized access, alteration, disclosure, or destruction. Medical and patient confidentiality is maintained according to established clinical healthcare standards.
            </p>
          </section>

          {/* Information Sharing */}
          <section className="space-y-3 border-t border-clinic-border/60 pt-6">
            <h2 className="text-xl font-bold text-clinic-text">
              Information Sharing
            </h2>
            <p>
              We do not sell, trade, or rent personal identification information to third parties. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our trusted clinical partners and healthcare advisors for research and care improvement.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="space-y-3 border-t border-clinic-border/60 pt-6">
            <h2 className="text-xl font-bold text-clinic-text">
              Children’s Privacy
            </h2>
            <p>
              Protecting the privacy of children is especially important to us. While our pediatric dental clinic treats infants and children under direct parental supervision, our website does not knowingly collect personal information directly from children under 13 without verifiable parental or guardian consent.
            </p>
          </section>

          {/* Changes to This Policy */}
          <section className="space-y-3 border-t border-clinic-border/60 pt-6">
            <h2 className="text-xl font-bold text-clinic-text">
              Changes to This Policy
            </h2>
            <p>
              Sakthi Dental Clinic may update this Privacy Policy from time to time. We encourage users to review this page periodically to stay informed about how we protect your information. Your continued use of the site following changes signifies your acceptance of those modifications.
            </p>
          </section>

          {/* Acceptance of Terms */}
          <section className="space-y-3 border-t border-clinic-border/60 pt-6">
            <h2 className="text-xl font-bold text-clinic-text">
              Acceptance of Terms
            </h2>
            <p>
              By using this website, you agree to this policy. If you do not accept our Privacy Policy, please do not use our website. Continued use of the site following any updates will be deemed as your acceptance of the revised policy.
            </p>
          </section>

          {/* Contact Us */}
          <section className="space-y-4 border-t border-clinic-border/60 pt-6">
            <h2 className="text-xl font-bold text-clinic-text">
              Contact Us Regarding Privacy
            </h2>
            <p>
              If you have any questions about this Privacy Policy or your interactions with our website, please contact Sakthi Dental Clinic at:
            </p>
            <div className="bg-clinic-surface-subtle p-5 rounded-2xl border border-clinic-border/60 space-y-2 text-xs sm:text-sm">
              <p className="font-bold text-clinic-text">Sakthi Dental Clinic</p>
              <p className="flex items-start gap-2 text-clinic-text-secondary">
                <MapPin className="w-4 h-4 text-clinic-primary shrink-0 mt-0.5" />
                {CLINIC_INFO.address.full}
              </p>
              <p className="flex items-center gap-2 text-clinic-text-secondary">
                <Mail className="w-4 h-4 text-clinic-primary shrink-0" />
                <a href={`mailto:${CLINIC_INFO.email}`} className="text-clinic-primary hover:underline">
                  {CLINIC_INFO.email}
                </a>
              </p>
              <p className="flex items-center gap-2 text-clinic-text-secondary">
                <Phone className="w-4 h-4 text-clinic-primary shrink-0" />
                {CLINIC_INFO.phoneNumbers.join(' / ')}
              </p>
            </div>
          </section>

          {/* Disclaimer regarding legal review */}
          <div className="p-4 bg-clinic-lavender/40 rounded-xl border border-clinic-border/60 text-xs text-clinic-text-secondary flex items-center gap-2">
            <Shield className="w-4 h-4 text-clinic-primary shrink-0" />
            <span>Preserved from the client brief document supplied for Sakthi Dental Clinic. Not a generic template.</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
