import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CTALink from '@/components/CTAs/cta_link';

const Hero: React.FC = () => {
  return (
    <section className="container">
      <div className="h-[calc(130vh-132px)]  relative flex flex-col shrink-0 items-center  justify-center overflow-hidden bg-accent pt-12 px-4 pb-6 border border-solid border-border rounded-[32px] my-6  mx-auto gap-8">
        <div className="relative flex flex-col items-center">
          <p className="mb-4  !font-noto_serif_jp !font-normal text-center !text-base text-foreground  uppercase">
            Experience Control{' '}
          </p>
          <h1 className="text-foreground text-center">
            Take charge of your
            <span className="text-primary"> compulsivity</span> and <br /> start
            your
            <span className="text-primary"> recovery </span>
            with MindMolt
          </h1>
          <p className="mb-8 !font-noto_serif_jp !font-normal text-center !text-base text-foreground max-w-lg">
            Tired of battling compulsive behaviors? Join Mindmolt to stop
            watching porn and embark on a journey toward recovery from porn
            addiction. Benefit from a platform designed to help you overcome
            your struggles and lead a more fulfilling life.
          </p>
          <div className="flex  flex-row gap-4 justify-center font-figtree font-medium">
            <div className="flex justify-center items-center h-12 rounded-md px-6 text-base bg-primary text-primary-foreground shadow-lg shadow-shadow  active:translate-y-[2px] hover:bg-primary/90 normal-case">
              <CTALink />
            </div>
            <Link
              href="/how-it-works"
              className="flex justify-center items-center h-12 rounded-md px-6 border border-border bg-background text-primary shadow-sm hover:bg-accent hover:text-accent-foreground normal-case"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="justify-self-center relative flex-1 w-[750px] ">
          <Image
            src="/images/home_Hero-Image.svg"
            alt="Hero image of a person having multiple emotions."
            layout="fill"
            className="h-full w-full"
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
