import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary h-full py-12">
      <div className="container w-[calc(100vw-24px)] flex flex-col gap-12">
        <div className="flex flex-col lg:flex-row items-start justify-start gap-10 lg:gap-16">
          <div className="lg:w-2/3 flex flex-col items-start lg:py-12 gap-12">
            <div className="flex items-start flex-col gap-6">
              <Link
                href="/"
                className="text-secondary-foreground font-figtree font-bold text-[28px] leading-9"
              >
                MindMolt
              </Link>
              <p className="text-secondary-foreground font-figtree font-bold text-2xl leading-9">
                Your happiness starts with you taking control
              </p>
            </div>
            <div className="flex flex-col gap-12">
              <div className="flex gap-8">
                <Link href="https://www.facebook.com/people/MindMolt/61567954025586/">
                  <Image
                    src="/images/socials/facebook.svg"
                    alt="Platform Facebook icon for Mindmolt"
                    width={24}
                    height={24}
                  />
                </Link>
                <Link href="https://www.instagram.com/mindmolt/">
                  <Image
                    src="/images/socials/instagram.svg"
                    alt="Platform Instagram icon link for Mindmolt"
                    width={24}
                    height={24}
                  />
                </Link>
                <Link href="https://x.com/MindMolt">
                  <Image
                    src="/images/socials/x.svg"
                    alt="Platform X icon link for Mindmolt"
                    width={24}
                    height={24}
                  />
                </Link>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <Image
                    src="/images/contact/room.svg"
                    alt="Location icon for Mindmolt"
                    width={24}
                    height={24}
                  />
                  <p className="text-secondary-foreground text-base">
                    228 Park Ave S PMB 772763
                    <br />
                    New York, NY 10003
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <Image
                    src="/images/contact/call.svg"
                    alt="Location icon for Mindmolt"
                    width={24}
                    height={24}
                  />
                  <p className="text-secondary-foreground text-base">
                    +1 (332) 246-0191
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <Image
                    src="/images/contact/email.svg"
                    alt="Location icon for Mindmolt"
                    width={24}
                    height={24}
                  />
                  <p className="text-secondary-foreground text-base">
                    support@mindmolt.com
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 flex flex-col lg:py-12 gap-12 items-start">
            <p className="text-secondary-foreground font-figtree font-bold text-[28px] leading-9">
              How can we help?
              <Link href="/contact-us" className="text-border underline pl-2">
                Contact us.
              </Link>
            </p>
            <div className="flex flex-col font-figtree font-medium gap-4">
              <Link href="/how-it-works" className="text-secondary-foreground">
                How it works
              </Link>
              {/* <Link href="/#pricing" className="text-secondary-foreground">
                                Pricing
                            </Link> */}
              <Link href="/contact-us" className="text-secondary-foreground">
                F.A.Q
              </Link>
            </div>
            <div className="sm:w-full flex flex-col gap-4">
              <p className="text-secondary-foreground font-figtree font-bold text-[28px]">
                Start your journey today
              </p>
              <div className="flex gap-8">
                <Link href="#">
                  <Image
                    src="/images/platforms/apple.svg"
                    alt="Apple icon"
                    width={32}
                    height={32}
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/images/platforms/playstore.svg"
                    alt="Playstore icon"
                    width={32}
                    height={32}
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/images/platforms/windows.svg"
                    alt="Windows icon"
                    width={32}
                    height={32}
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/images/platforms/android.svg"
                    alt="Android icon"
                    width={32}
                    height={32}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row justify-between py-4 text-sm gap-6 md:gap-0">
          <p className="text-secondary-foreground text-sm">
            &copy; Enigma Digital Apps LLC. All rights reserved.
          </p>
          <div className="flex gap-8 text-secondary-foreground items-center">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <hr className="h-4 w-0.5 bg-secondary-foreground" />
            <Link href="/terms">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
