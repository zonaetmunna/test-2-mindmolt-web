import Pricing from '@/components/pricing/pricing';
import Hero from '../../../app/(web)/(home)/_components/hero';
import HowItHelpsYou from '../../../app/(web)/(home)/_components/how-it-helps-you';
import HowItWorks from '../../../app/(web)/(home)/_components/how-it-works';
import BlogSection from './_components/blogSection';
import { OurCommitment } from './_components/our-commitment';

export const metadata = {
  title: 'MindMolt – Break Free from Porn Addiction',
  description:
    'Use MindMolt to overcome porn addiction by blocking explicit content across devices and tracking your progress.',
};

export default async function Home() {
  return (
    <main>
      <Hero />
      <HowItHelpsYou />
      <HowItWorks />
      <OurCommitment />
      <BlogSection />
      <Pricing />
    </main>
  );
}
