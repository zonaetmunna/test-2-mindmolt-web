'use client';
import ItemsWithCustomCarousel from './items-with-custom-carousel';

export const OurCommitment: React.FC = () => {
  return (
    <div className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-primary-foreground mb-3">
          Our commitment to your recovery
        </h2>
        <p className="text-primary-foreground max-w-3xl mb-4">
          Discover how MindMolt empowers your recovery journey with
          privacy-focused tools, community support, and a commitment to
          fostering a healthier digital environment dedicated to stopping porn.
        </p>
        <div className="relative pt-8 mb-96 md:mb-64">
          <ItemsWithCustomCarousel />
        </div>
        <div className="h-40"></div> {/* Spacer to show the effect */}
      </div>
    </div>
  );
};
