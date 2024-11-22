import React from 'react';
import CTA from '../../components/CTAs/cta';
import FAQSection from './_components/faq';
import ContactForm from '@/components/contact/contactForm';

export const metadata = {
  title: 'MindMolt – Get in Touch with Our Support Team',
  description:
    'Get in touch with the MindMolt team for inquiries, support, or feedback. We’re here to assist you on your journey.',
};

const ContactUs: React.FC = () => {
  return (
    <main>
      <FAQSection />
      <ContactForm />
      <CTA />
    </main>
  );
};
export default ContactUs;
