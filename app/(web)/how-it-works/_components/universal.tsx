import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const Universal: React.FC = () => {
  return (
    <section className="container my-16">
      <div className="relative flex flex-col shrink-0 items-center  justify-center overflow-hidden bg-[#054D87] py-16 px-4 border border-solid border-[#34AAFC] rounded-[32px] my-gap-8 ">
        <div className="relative flex flex-col items-center gap-2 max-w-[600px] ">
          <h3 className="text-secondary-foreground text-center leading-tight">
            We got you covered, regardless of your device
          </h3>
          <p className="mb-8 !font-noto_serif_jp !font-normal text-center !text-base text-secondary-foreground max-w-lg">
            Mindmolt has you covered, no matter what device you use. Our app
            supports all major platforms, so you can integrate your recovery
            journey seamlessly into your daily life.
          </p>
        </div>
        <div className="flex gap-8 pt-8">
          <Link href="#">
            <Image
              src="/images/platforms/apple.svg"
              alt="Apple icon"
              width={60}
              height={60}
            />
          </Link>
          <Link href="#">
            <Image
              src="/images/platforms/playstore.svg"
              alt="Playstore icon"
              width={60}
              height={60}
            />
          </Link>
          <Link href="#">
            <Image
              src="/images/platforms/windows.svg"
              alt="Windows icon"
              width={60}
              height={60}
            />
          </Link>
          <Link href="#">
            <Image
              src="/images/platforms/android.svg"
              alt="Android icon"
              width={60}
              height={60}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Universal;
