import React from 'react';
import Link from 'next/link';
import CTALink from './cta_link';

const CTA: React.FC<{ withDescription?: boolean }> = ({
  withDescription = true,
}) => {
  return (
    <section className="container mt-12  mb-[64px]">
      <div className="text-center">
        <h2>Start your journey today</h2>
        <div className="flex  flex-row gap-4 justify-center font-figtree font-medium">
          <div className="flex justify-center items-center h-12 rounded-md px-6 text-base bg-primary text-primary-foreground shadow-lg shadow-shadow  active:translate-y-[2px] hover:bg-primary/90 normal-case">
            <CTALink />
          </div>
          <Link
            href="/how-it-works"
            className="flex justify-center items-center h-12 rounded-md px-6 border border-border bg-background text-primary shadow-sm hover:bg-accent hover:text-accent-foreground normal-case"
          >
            Learn more
          </Link>
        </div>
      </div>
      {withDescription && (
        <p className="max-w-[900px] mx-auto mt-8 px-4 text-left leading-tight">
          We offer a 30-day money-back guarantee for subscriptions made directly
          through our website. Please note that purchases through the Apple App
          Store or Google Play Store are subject to their respective refund
          policies.
        </p>
      )}
    </section>
  );
};

export default CTA;
