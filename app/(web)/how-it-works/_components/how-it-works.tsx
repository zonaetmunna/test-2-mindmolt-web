import React from 'react';
import Image from 'next/image';

const HowItWorksC: React.FC = () => {
  return (
    <section className="lg:bg-foreground my-[64px]">
      <div className="container">
        <div className="bg-foreground lg:bg-transparent py-12 px-4 rounded-[32px]">
          <h2 className="text-center text-primary-foreground">
            How MindMolt Works
          </h2>
          <div className="flex flex-col items-center space-y-2 mt-16 gap-24">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 gap-8">
              <div className="w-full sm:w-1/2">
                <Image
                  src="/images/howItWorks/download_app.svg"
                  alt="Mental Image"
                  width={600}
                  height={600}
                />
              </div>
              <div className="flex flex-col items-center md:items-start justify-center w-full sm:w-1/2 ">
                <h3 className="text-[#B8DFFE]">
                  Download the app on your device
                </h3>
                <ul className="font-noto_serif_jp text-primary-foreground text-base pl-8">
                  <li className="list-outside list-disc   leading-tight">
                    <b>Go to your app store </b>The Mindmolt app is available on
                    iOS, Android, Windows, and macOS.
                  </li>
                  <li className="list-outside list-disc   leading-tight">
                    <b>Create an account </b>Start by setting up your profile
                    and entering in your personal information.
                  </li>
                  <li className="list-outside list-disc   leading-tight">
                    <b>Personalize your journey </b>Answer a few questions so we
                    can tailor the best resources and support for you.
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row-reverse items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 gap-8 lg:pl-[64px]">
              <div className="w-full sm:w-1/2">
                <Image
                  src="/images/howItWorks/start_journey.svg"
                  alt="Mental Image"
                  width={600}
                  height={600}
                />
              </div>
              <div className="flex flex-col items-center md:items-start justify-center w-full sm:w-1/2 ">
                <h3 className="text-[#B8DFFE]">Enable block</h3>
                <ul className="font-noto_serif_jp text-primary-foreground text-base pl-8">
                  <li className="list-outside list-disc   leading-tight">
                    <b>Enable the porn blocker </b>On the home screen press the
                    button Block Porn!
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row  items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 gap-8">
              <div className="w-full sm:w-1/2">
                <Image
                  src="/images/howItWorks/block_success.svg"
                  alt="Mental Image"
                  width={600}
                  height={600}
                />
              </div>
              <div className="flex flex-col items-center md:items-start justify-center w-full sm:w-1/2 ">
                <h3 className="text-[#B8DFFE] lg:text-left">
                  We’ve Got Your Back!
                </h3>
                <ul className="font-noto_serif_jp text-primary-foreground text-base pl-8">
                  <li className="list-outside list-disc   leading-tight">
                    <b>24/7 Support </b>Reach out to us at any time for guidance
                    and assistance.
                  </li>
                  <li className="list-outside list-disc   leading-tight">
                    <b>Regular Updates </b>Our app is continuously updated with
                    new features and resources to better assist you.
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row-reverse items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 gap-8 lg:pl-[64px] ">
              <div className="w-full sm:w-1/2">
                <Image
                  src="/images/howItWorks/self_confidence.svg"
                  alt="Mental Image"
                  width={500}
                  height={500}
                />
              </div>
              <div className="flex flex-col items-center md:items-start justify-center w-full sm:w-1/2 ">
                <h3 className="text-[#B8DFFE]">
                  Start your journey to recovery
                </h3>
                <ul className="font-noto_serif_jp text-primary-foreground text-base pl-8">
                  <li className="list-outside list-disc   leading-tight">
                    <b>Educational Content </b>Learn the signs of porn addiction
                    and how it affects your life.
                  </li>
                  <li className="list-outside list-disc   leading-tight">
                    <b>Designed with You in Mind </b>Benefit from a platform
                    designed to help you overcome porn addiction, one day at a
                    time.
                  </li>
                  <li className="list-outside list-disc   leading-tight">
                    <b>Community Support </b>Join a community of others just
                    like you on the path to recovery.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksC;
