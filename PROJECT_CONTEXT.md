# Sakthi Dental Clinic — Project Context

## 1. Project Overview
Build a professional, responsive, client-ready website for Sakthi Dental Clinic, located in Hosur, Tamil Nadu, India.
This project is based on the client brief supplied by ShadowFox. The website must present the clinic's services, build trust with prospective patients, provide useful information, and make it easy for visitors to contact the clinic or request an appointment.
Treat this as a real client project, not a generic dental website template.

## 2. Technology Stack
Use the following stack:
- React
- Vite
- TypeScript
- Tailwind CSS
- React Router
- Lucide React for icons
- React Hook Form and Zod for contact-form validation
- Vitest and React Testing Library for important component tests
- ESLint for code quality
Use stable, mutually compatible package versions and follow their official setup instructions.
Do not introduce a backend, database, authentication, or paid third-party service unless a requirement genuinely needs it.

## 3. Target Audience
The website serves:
- Women and children
- Parents and guardians
- Families
- Adult patients
- Senior citizens
- New and existing clinic patients
Prioritise readability, straightforward navigation, accessible controls, patient confidence, and mobile usability.

## 4. Brand and Visual Direction
The visual style must be:
- Professional, warm, friendly, and trustworthy
- Clean, modern, and minimal
- Suitable for a healthcare business
- Consistent across every page
Use white, lavender, pale purple, and soft pastel colours.
Suggested design tokens:
- Primary: `#6750A4`
- Primary hover: `#57418F`
- Soft lavender: `#F3EEFF`
- Background: `#FFFFFF`
- Main text: `#252238`
- Secondary text: `#686579`
- Border: `#E7E3EF`
Use a readable sans-serif typeface, consistent spacing, restrained shadows, rounded cards, and clear visual hierarchy.
Avoid excessive gradients, distracting animations, oversized decorative elements, cluttered layouts, and generic AI-generated design patterns.
The website should feel carefully designed for this specific clinic.

## 5. Required Pages
Create the following pages:
- Home — `/`
- About Us — `/about`
- Treatments — `/treatments`
- FAQs — `/faqs`
- Contact Us — `/contact`
- Privacy Policy — `/privacy-policy`
Use React Router for page navigation. Ensure all routes work when accessed directly and after refreshing the browser.

## 6. Home Page Requirements
Build the Home page in this order:
1. Responsive navigation bar with clinic branding and links.
2. Hero section with the supplied headline, supporting text, clinic imagery, and appointment CTA.
3. Assurance banner.
4. Why Choose Sakthi Dental Clinic section.
5. Featured treatments section.
6. Testimonials section.
7. Clinic amenities section.
8. Final appointment CTA.
9. Footer with contact information, navigation links, key treatments, and social icons.

### Hero content
- Headline: "Specialized Dental Care for Women, Children & Families"
- Supporting text: "Experience compassionate, expert-led dental services tailored to your needs, all in a modern and welcoming environment."
- Primary CTA: "Fix an Appointment"
- Optional secondary CTA: "Emergency Dental Support"
The primary CTA should navigate to the Contact page or an appropriate appointment section. Do not invent a booking integration.

### Assurance banner
- Heading: "You are always in safe hands."
- Supporting text: "We are ready to help, anytime."
Use suitable client-provided imagery if available.

### Why Choose Us
Include these four features:
- All-in-One Care
- Experienced Doctors
- Patient-Centric Approach
- Technology-Driven Services
Preserve the intent of the descriptions in the client brief.

### Featured Treatments
Show these six treatments:
- Tooth Extraction
- Artificial Complete Denture
- Tooth Filling
- Teeth Cleaning or Scaling
- Bleaching
- Orthodontic Treatment
Each treatment card should contain a relevant icon or image, title, and concise description.
Include a "View Full List of Treatments" link to `/treatments`.

### Testimonials
Use the three testimonials supplied in the original client brief. Preserve their attribution.
Do not generate additional reviews, ratings, or patient identities.

### Clinic Facilities
Include:
- Convenient central location
- Hassle-free parking
- Doctors available daily
- Pickup and drop-off support
- Wheelchair access
*Note*: The clinic's operating hours require confirmation because the source brief contains conflicting timings.

## 7. About Us Page
Include:
- "Get to Know Dr. Anupriya"
- The supplied professional biography
- Clinic background and patient-care philosophy
- Vision and mission
- The nine doctors listed in the brief
Use only the names, roles, and experience details supplied by the client. Do not fabricate biographies, degrees, qualifications, or awards.

## 8. Treatments Page
Create a detailed, responsive list of all 16 treatments from the brief:
1. Teeth Cleaning & Scaling
2. Tooth Filling
3. Tooth Extraction
4. Artificial Complete Denture
5. Dental Implants
6. Laser Dentistry
7. Root Canal Therapy
8. Wisdom Tooth Extraction
9. Fixed Partial Denture (Bridge)
10. Teeth Whitening (Bleaching)
11. Veneers
12. Pediatric Dentistry
13. Flap Surgery
14. Orthodontic Braces
15. Clear Aligners
*Important*: The client brief lists 15 distinct treatment headings, not 16. Use the 15 headings actually provided, and do not invent a sixteenth treatment.
Use the descriptions supplied in the client document. Organise them into readable cards or sections with consistent spacing and accessible headings.

## 9. FAQs Page
Use the 14 questions and answers supplied in the brief.
An accessible accordion is preferred. Each question must be keyboard-operable and clearly indicate its expanded or collapsed state.
Preserve the supplied answers. Do not invent medical advice or silently rewrite clinical claims.

## 10. Contact Page
Create a responsive two-column layout on desktop that stacks on smaller screens.
### Form heading
"We would love to hear from you"
### Fields
- Name — required
- Email — required and validated
- Phone Number — required
- Your Message — optional multiline text field
### Validation
- Show clear, accessible validation errors.
- Validate required fields.
- Validate email format.
- Prevent invalid submissions.
- Provide a clear submission or unavailable-service status.
No backend or form delivery service has been specified. Do not claim the message was delivered. Keep the form ready for future integration.
### Contact information
- Address: B2/8, SBM Layout, Anthivadi, Hosur, Tamil Nadu 635109, India
- Email: info@sakthidentalclinic.in
- Phone: +91 9862890897 / +91 9363298118
*Note*: The Contact page lists timings as Sunday to Saturday, 9 AM to 7 PM. The amenities section says 9 AM to 9 PM. Do not silently reconcile this discrepancy; flag it for confirmation.
Use appropriate location, mail, phone, and clock icons.

## 11. Privacy Policy
Create `/privacy-policy` using the privacy policy supplied in the client PDF.
Preserve the complete supplied text, headings, and contact information. Do not replace it with a generic policy or claim that it has been legally reviewed.

## 12. Pricing Requirement
The general assignment mentions a pricing section, but the clinic-specific PDF does not provide treatment prices or pricing plans.
Do not invent prices, discount percentages, packages, or payment claims.
Keep pricing as an unresolved requirement and ask the project owner or instructor whether it is required for this client.

## 13. Project Architecture
Use reusable components and separate page-level components.
Recommended folders:
- `src/components/layout`
- `src/components/home`
- `src/components/common`
- `src/components/forms`
- `src/components/treatments`
- `src/pages`
- `src/data`
- `src/hooks`
- `src/lib`
- `src/assets/styles`
- `public/images`
- `public/icons`
- `tests`
Keep supplied content in data files where appropriate. Avoid repeating the same navigation, footer, buttons, or treatment-card markup across pages.

## 14. Responsive Design and Accessibility
Support mobile, tablet, laptop, and desktop layouts.
Requirements:
- Responsive navigation
- No unintended horizontal overflow
- Appropriately sized text and touch targets
- Semantic HTML
- Correct heading hierarchy
- Descriptive image alt text
- Labels for every form field
- Visible keyboard focus states
- Accessible interactive controls
- Sufficient colour contrast
- Reduced-motion support where animations are used

## 15. SEO and Performance
Implement:
- Descriptive page titles and meta descriptions
- Semantic page structure
- Optimised images
- Lazy loading for below-the-fold images
- Appropriate image dimensions
- A favicon
- A robots.txt file
- A sitemap when appropriate for deployment
- Clean URLs and a production-ready build
Do not add fake structured data, fabricated clinic ratings, or unsupported medical claims.

## 16. Image and Asset Handling
Client asset folder:
https://drive.google.com/drive/folders/1sMk4l1MPxmJzOMFR7-9WT7KIlhOvRb9K?usp=sharing
Use these assets where accessible and relevant.
Do not assume the Drive files are already available locally. If access is unavailable, identify which assets are missing and use suitable, properly licensed temporary alternatives.
Keep image paths organised and avoid unnecessary large files.

## 17. Quality Assurance
Before completion:
- Install dependencies successfully.
- Run the development server.
- Check all page routes.
- Test navigation and CTA links.
- Test required form fields and email validation.
- Check mobile and desktop layouts.
- Verify that images load.
- Run automated tests where implemented.
- Run ESLint.
- Run the production build.
- Resolve errors and important warnings.
- Document deployment instructions.
Do not claim a test passed unless it was actually run.

## 18. Working Rules for the AI Agent
- Read this project context before making implementation decisions.
- Inspect the existing workspace before creating or overwriting files.
- Present a concise implementation plan before large changes.
- Implement the website incrementally.
- Use the supplied client content as the source of truth.
- Do not invent missing business information.
- Prefer simple, maintainable solutions over unnecessary dependencies.
- Do not leave dead links, broken buttons, or fake functionality.
- Keep components focused and reusable.
- Explain significant implementation decisions and report tests honestly.

## 19. Definition of Done
The project is ready for submission when:
- All required pages exist.
- The Home page includes the required sections.
- All supplied treatments, FAQs, doctors, and testimonials are represented correctly.
- The Contact form validates correctly.
- Navigation and CTAs work as intended.
- The website is responsive and accessible.
- No known critical build or runtime errors remain.
- The production build succeeds.
- Deployment instructions and a concise project explanation are available.
Build this as a polished, practical client-facing healthcare website rather than a generic template.
