import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: 'Full name is required (at least 2 characters)' })
    .max(80, { message: 'Name cannot exceed 80 characters' }),
  email: z
    .string()
    .trim()
    .min(1, { message: 'Email address is required' })
    .email({ message: 'Please enter a valid email address (e.g. name@example.com)' }),
  phone: z
    .string()
    .trim()
    .min(10, { message: 'Phone number is required (at least 10 digits)' })
    .regex(/^[0-9+\-\s()]{10,18}$/, {
      message: 'Please enter a valid phone number (e.g. +91 9862890897)',
    }),
  message: z.string().trim().max(1000, { message: 'Message cannot exceed 1000 characters' }).optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
