import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send, CheckCircle2, AlertCircle, Phone, Info } from 'lucide-react';
import { Button } from '../common/Button';
import { CLINIC_INFO } from '../../data/clinicInfo';
import { contactFormSchema, ContactFormData } from '../../lib/validations';

export const ContactForm: React.FC = () => {
  const [submissionStatus, setSubmissionStatus] = useState<
    'idle' | 'submitting' | 'ready_for_integration'
  >('idle');
  const [submittedData, setSubmittedData] = useState<ContactFormData | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    mode: 'onBlur',
    // Custom resolver leveraging Zod safeParse
    resolver: async (data) => {
      const result = contactFormSchema.safeParse(data);
      if (result.success) {
        return { values: result.data, errors: {} };
      }
      const formattedErrors: Record<string, { type: string; message: string }> = {};
      result.error.errors.forEach((err) => {
        const fieldName = err.path[0] as string;
        if (!formattedErrors[fieldName]) {
          formattedErrors[fieldName] = {
            type: err.code,
            message: err.message,
          };
        }
      });
      return { values: {}, errors: formattedErrors };
    },
  });

  const onSubmit = (data: ContactFormData) => {
    setSubmissionStatus('submitting');
    setTimeout(() => {
      setSubmittedData(data);
      // Per brief: "No backend or form delivery service has been specified. Do not claim the message was delivered. Keep the form ready for future integration."
      setSubmissionStatus('ready_for_integration');
    }, 600);
  };

  const handleReset = () => {
    reset();
    setSubmissionStatus('idle');
    setSubmittedData(null);
  };

  return (
    <div className="card-clinic p-6 sm:p-8 space-y-6">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold text-clinic-text">
          We would love to hear from you
        </h2>
        <p className="text-xs sm:text-sm text-clinic-text-secondary">
          Fill out the form below to inquire about dental services or appointment slots.
        </p>
      </div>

      {submissionStatus === 'ready_for_integration' ? (
        <div className="p-6 bg-clinic-lavender/60 border border-clinic-primary/30 rounded-2xl space-y-4 animate-fadeIn" role="status" aria-live="polite">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-clinic-primary shrink-0 mt-0.5" />
            <div className="space-y-2">
              <h3 className="text-base font-bold text-clinic-text">
                Form Validated & Captured Successfully
              </h3>
              <p className="text-xs sm:text-sm text-clinic-text-secondary leading-relaxed">
                Thank you, <strong className="text-clinic-text">{submittedData?.name}</strong>. Your contact information has been validated cleanly:
              </p>
              <div className="text-xs bg-white/80 p-3 rounded-xl border border-clinic-border space-y-1 text-clinic-text-secondary">
                <p><strong>Email:</strong> {submittedData?.email}</p>
                <p><strong>Phone:</strong> {submittedData?.phone}</p>
                {submittedData?.message && <p><strong>Message:</strong> {submittedData.message}</p>}
              </div>
            </div>
          </div>

          {/* Backend Status Notice */}
          <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 space-y-1.5">
            <div className="flex items-center gap-1.5 font-bold">
              <Info className="w-4 h-4 text-amber-700" />
              Service Integration Notice
            </div>
            <p className="leading-relaxed">
              No backend API or email delivery service has been configured for this demonstration. The form is fully validated and primed for server integration. For immediate appointments or urgent dental care in Hosur, please call the clinic directly:
            </p>
            <div className="pt-1 flex items-center gap-3 font-semibold text-clinic-primary">
              <a href={`tel:${CLINIC_INFO.phoneNumbers[0].replace(/\s+/g, '')}`} className="hover:underline flex items-center gap-1">
                <Phone className="w-3.5 h-3.5" /> {CLINIC_INFO.phoneNumbers[0]}
              </a>
              <span>•</span>
              <a href={`tel:${CLINIC_INFO.phoneNumbers[1].replace(/\s+/g, '')}`} className="hover:underline">
                {CLINIC_INFO.phoneNumbers[1]}
              </a>
            </div>
          </div>

          <Button variant="secondary" size="sm" onClick={handleReset}>
            Send Another Message
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5" aria-label="Contact Form">
          {/* Full Name */}
          <div className="space-y-1.5">
            <label htmlFor="contact-name" className="block text-xs font-bold text-clinic-text uppercase tracking-wider">
              Full Name <span className="text-rose-500" aria-hidden="true">*</span>
            </label>
            <input
              id="contact-name"
              type="text"
              {...register('name')}
              aria-invalid={errors.name ? 'true' : 'false'}
              aria-describedby={errors.name ? 'contact-name-error' : undefined}
              placeholder="Enter your full name"
              className={`w-full px-4 py-2.5 rounded-xl border text-sm text-clinic-text bg-white transition-all focus:outline-none focus:ring-2 focus:ring-clinic-primary ${
                errors.name ? 'border-rose-400 bg-rose-50/30' : 'border-clinic-border'
              }`}
            />
            {errors.name && (
              <p id="contact-name-error" className="text-xs font-medium text-rose-600 flex items-center gap-1 mt-1" role="alert">
                <AlertCircle className="w-3.5 h-3.5" />
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email Address */}
          <div className="space-y-1.5">
            <label htmlFor="contact-email" className="block text-xs font-bold text-clinic-text uppercase tracking-wider">
              Email Address <span className="text-rose-500" aria-hidden="true">*</span>
            </label>
            <input
              id="contact-email"
              type="email"
              {...register('email')}
              aria-invalid={errors.email ? 'true' : 'false'}
              aria-describedby={errors.email ? 'contact-email-error' : undefined}
              placeholder="e.g. yourname@example.com"
              className={`w-full px-4 py-2.5 rounded-xl border text-sm text-clinic-text bg-white transition-all focus:outline-none focus:ring-2 focus:ring-clinic-primary ${
                errors.email ? 'border-rose-400 bg-rose-50/30' : 'border-clinic-border'
              }`}
            />
            {errors.email && (
              <p id="contact-email-error" className="text-xs font-medium text-rose-600 flex items-center gap-1 mt-1" role="alert">
                <AlertCircle className="w-3.5 h-3.5" />
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Phone Number */}
          <div className="space-y-1.5">
            <label htmlFor="contact-phone" className="block text-xs font-bold text-clinic-text uppercase tracking-wider">
              Phone Number <span className="text-rose-500" aria-hidden="true">*</span>
            </label>
            <input
              id="contact-phone"
              type="tel"
              {...register('phone')}
              aria-invalid={errors.phone ? 'true' : 'false'}
              aria-describedby={errors.phone ? 'contact-phone-error' : undefined}
              placeholder="e.g. +91 9862890897"
              className={`w-full px-4 py-2.5 rounded-xl border text-sm text-clinic-text bg-white transition-all focus:outline-none focus:ring-2 focus:ring-clinic-primary ${
                errors.phone ? 'border-rose-400 bg-rose-50/30' : 'border-clinic-border'
              }`}
            />
            {errors.phone && (
              <p id="contact-phone-error" className="text-xs font-medium text-rose-600 flex items-center gap-1 mt-1" role="alert">
                <AlertCircle className="w-3.5 h-3.5" />
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Message (Optional) */}
          <div className="space-y-1.5">
            <label htmlFor="contact-message" className="block text-xs font-bold text-clinic-text uppercase tracking-wider">
              Your Message <span className="text-clinic-text-secondary/70 font-normal lowercase">(optional)</span>
            </label>
            <textarea
              id="contact-message"
              rows={4}
              {...register('message')}
              aria-invalid={errors.message ? 'true' : 'false'}
              aria-describedby={errors.message ? 'contact-message-error' : undefined}
              placeholder="Tell us about your dental query, symptoms, or preferred consultation time..."
              className={`w-full px-4 py-2.5 rounded-xl border text-sm text-clinic-text bg-white transition-all focus:outline-none focus:ring-2 focus:ring-clinic-primary resize-y ${
                errors.message ? 'border-rose-400 bg-rose-50/30' : 'border-clinic-border'
              }`}
            />
            {errors.message && (
              <p id="contact-message-error" className="text-xs font-medium text-rose-600 flex items-center gap-1 mt-1" role="alert">
                <AlertCircle className="w-3.5 h-3.5" />
                {errors.message.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            size="lg"
            fullWidth
            disabled={submissionStatus === 'submitting'}
            className="shadow-soft-sm"
          >
            {submissionStatus === 'submitting' ? (
              'Validating Request...'
            ) : (
              <>
                <Send className="w-4 h-4 mr-1" />
                Submit Inquire / Consultation Request
              </>
            )}
          </Button>

          <p className="text-[11px] text-clinic-text-secondary text-center">
            Your personal information is handled according to our{' '}
            <a href="/privacy-policy" className="text-clinic-primary underline">
              Privacy Policy
            </a>
            .
          </p>
        </form>
      )}
    </div>
  );
};
