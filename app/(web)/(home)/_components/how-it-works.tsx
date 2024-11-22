import React from 'react';
import Image from 'next/image';
import CTA from '@/components/CTAs/cta';

const HowItWorks: React.FC = () => {
  return (
    <section className="py-[64px] lg:bg-accent">
      <div className="container">
        <div className="bg-accent lg:bg-transparent py-12 px-4 rounded-[32px]">
          <h2 className="text-center text-muted">How MindMolt works</h2>
          <div className="flex flex-col md:flex-row items-start justify-between space-y-12 md:space-y-0 mt-12 gap-12 lg:gap-16 pb-12 lg:pb-16">
            {/* Step 1 */}
            <div className="flex-1 flex-col items-center justify-start gap-12">
              <div className="h-80 flex items-center justify-center">
                <Image
                  src="/images/howItWorks/get_the_app.svg"
                  alt="Get the app"
                  width={320}
                  height={320}
                />
              </div>
              <div className="px-4">
                <h2 className="mt-4 text-center">1</h2>
                <div className="flex flex-col items-center">
                  <h3 className="text-primary text-center text-[28px]">
                    Download the App
                  </h3>
                  <ul className="font-noto_serif_jp text-foreground text-base px-4 space-y-2">
                    <li className="list-outside list-disc leading-tight">
                      Ready to quit porn? Download Mindmolt from your preferred
                      app store.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex-1 flex-col items-center justify-start gap-12">
              <div className="h-80 flex items-center justify-center">
                <Image
                  src="/images/howItWorks/enable_block.svg"
                  alt="Enable blocking"
                  width={320}
                  height={320}
                />
              </div>
              <div className="px-4">
                <h2 className="mt-4 text-center">2</h2>
                <div className="flex flex-col items-center">
                  <h3 className="text-primary text-center text-[28px]">
                    Enable Blocking
                  </h3>
                  <ul className="font-noto_serif_jp text-foreground text-base space-y-2 px-4">
                    <li className="list-outside list-disc leading-tight">
                      Activate our porn blocker to stop watching porn
                      immediately.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 3 - Image vertically centered */}
            <div className="flex-1 flex-col items-center justify-start gap-12">
              <div className="h-80 flex items-center justify-center">
                <Image
                  src="/images/howItWorks/start_your_journey.svg"
                  alt="Start your journey"
                  width={320}
                  height={320}
                />
              </div>
              <div className="px-4">
                <h2 className="mt-4 text-center">3</h2>
                <div className="flex flex-col items-center">
                  <h3 className="text-primary text-center text-[28px]">
                    Start your Journey
                  </h3>
                  <ul className="font-noto_serif_jp text-foreground text-base space-y-2 px-4">
                    <li className="list-outside list-disc leading-tight">
                      Begin your path to breaking porn addiction with robust
                      support and resources tailored to your needs.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CTA withDescription={false} />
      </div>
    </section>
  );
};

export default HowItWorks;
