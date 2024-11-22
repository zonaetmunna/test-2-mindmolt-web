import React from 'react';
import Hero from './_components/hero';
import Universal from './_components/universal';
import HowItWorksC from './_components/how-it-works';

export const metadata = {
  title: 'How MindMolt Works – Build Lasting Habits',
  description:
    'Discover how MindMolt helps users overcome porn addiction with a unique approach, comprehensive tools, and community support.',
};

const HowItWorks: React.FC = () => {
  return (
    <main>
      <Hero />
      <Universal />
      <HowItWorksC />
      {/* <Pricing /> */}
    </main>
  );
};
export default HowItWorks;
