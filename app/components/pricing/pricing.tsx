import React from 'react';
import CTA from '../CTAs/cta';
const Pricing: React.FC = () => {
  return (
    <section className="container " id="pricing">
      <div className="flex flex-col items-center gap-8 py-16">
        <div className="items-center">
          <p className="mb-4 !font-noto_serif_jp !font-normal text-center !text-base text-foreground  uppercase">
            Pricing
          </p>
          <h3 className="text-center leading-tight mb-4 text-[28px]">
            Value you can trust
          </h3>
          <p className="text-center leading-tight mb-6">
            Plan to fit your needs and your journey
            <br />
            Full access to our entire app on all supported platforms
            <br />
            (iOS, Android, Windows, macOS).
          </p>
        </div>
        <div className="mx-auto flex flex-col lg:flex-row gap-16">
          <div className="flex-1 flex flex-col sm:flex-row lg:flex-col sm:items-start md:items-center lg:items-start  justify-between border border-solid  rounded-sm bg-gradient-to-t from-primary/10 from-10% via-background via-70%  py-7 pl-4 pr-12 min-w-[288px] md:max-w[552px] lg:max-w-[316px] gap-6">
            <div className="items-start mb-8 md:mb-4 md:space-y-2">
              <p className="text-primary font-bold font-figtree leading-tight">
                Weekly
              </p>
              <h2 className="text-foreground text-[28px]">$7.99/wk</h2>
            </div>
            <p className="md:w-1/2 lg:w-full md:space-y-2 lg:space-y-4 md:-ml-8 lg:ml-0">
              Ideal for those who want to test the app&apos;s features.
            </p>
          </div>
          <div className="flex-1 flex flex-col sm:flex-row lg:flex-col sm:items-start md:items-center lg:items-start  justify-between border border-solid  rounded-sm bg-gradient-to-t from-primary/10 from-10% via-background via-70% py-7 px-4 pr-12 min-w-[288px] md:max-w[552px] lg:max-w-[316px] gap-6 relative">
            <div className="absolute right-4 top-0 -translate-y-1/2 font-figtree text-[12px] bg-primary text-primary-foreground px-2 py-1">
              {' '}
              50% off promo
            </div>
            <div className="items-start mb-8 md:mb-4 md:space-y-2">
              <p className="text-primary font-bold font-figtree leading-tight">
                Monthly
              </p>
              <div className="flex flex-col gap-0 items-start">
                <h2 className="text-primary text-[28px] leading-tight mb-1">
                  $4.99/mo
                </h2>
                <p className="line-through text-[#797676]">$9.99/mo</p>
              </div>
            </div>
            <p className="md:w-1/2 lg:w-full md:space-y-2 lg:space-y-4 md:-ml-8 lg:ml-0">
              Perfect for consistent support at an affordable price.
            </p>
          </div>
          <div className="flex-1 flex flex-col sm:flex-row lg:flex-col sm:items-start md:items-center lg:items-start  justify-between border border-solid  rounded-sm bg-gradient-to-t from-primary/10 from-10% via-background via-70% py-7 px-6 pr-6 min-w-[288px] md:max-w[552px] lg:max-w-[316px]">
            <div className="items-start mb-8 md:mb-4 md:space-y-2">
              <p className="text-primary font-bold font-figtree leading-tight">
                Annual
              </p>
              <h2 className="text-foreground text-[28px]">
                $99/yr
                <span className="text-[#0A4070] translate-y-1 pl-1 inline-block font-noto_serif_jp font-normal text-base">
                  {' '}
                  (Save 17%)
                </span>
              </h2>
            </div>
            <p className="md:w-1/2 lg:w-full md:space-y-2 lg:space-y-4 md:-ml-14 lg:ml-0">
              The best value for a long-term commitment towards recovery.
            </p>
          </div>
        </div>
        <CTA />
      </div>
    </section>
  );
};
export default Pricing;
