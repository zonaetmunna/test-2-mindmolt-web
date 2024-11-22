import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';
const data = [
  {
    title: 'Understanding your struggle',
    image: '/images/ourCommitment/Sad Woman Hands Hair 1.png',
    describe:
      "We understand the signs of porn addiction, and we're here to help you stop watching porn. Our resources on how to break porn addiction facilitate effective recovery from porn addiction.",
  },
  {
    title: 'Your privacy matters',
    image: '/images/ourCommitment/Laptop Keyboard Hands.png',
    describe:
      'Your journey to stop porn remains confidential with MindMolt. We uphold the highest standards of privacy regarding your data and activity.',
  },
  {
    title: 'Simple, effective tools',
    image: '/images/ourCommitment/Man Hands Cellphone.png',
    describe:
      'Our tools to stop watching porn are easy to use yet highly effective. Begin your recovery with the confidence that you’re supported by proven methods to quit porn.',
  },
  {
    title: 'Promoting digital wellness',
    image: '/images/ourCommitment/Sunset Running Silhouette.jpg',
    describe:
      'MindMolt is committed to breaking porn addiction and promoting digital wellness for all its users. Step into a healthier online experience today by using our porn blocker.',
  },
];
export default function ItemsWithCustomCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent default behavior
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current!.offsetLeft);
    setScrollLeft(scrollContainerRef.current!.scrollLeft);
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current!.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current!.scrollLeft = scrollLeft - walk;
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      container.scrollLeft += e.deltaY;
    };

    container.addEventListener('wheel', onWheel);

    return () => container.removeEventListener('wheel', onWheel);
  }, []);

  return (
    <div className="absolute left-0 w-[calc(100vw-11%)]">
      <div className="relative overflow-x-auto">
        <div
          ref={scrollContainerRef}
          className="flex space-x-4 cursor-grab active:cursor-grabbing pr-40"
          style={{
            overflowX: 'auto',
            whiteSpace: 'nowrap',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onMouseMove={onMouseMove}
        >
          {data.map((item) => (
            <div
              key={item.title}
              className="inline-block flex-shrink-0 w-[250px] md:w-[420px] overflow-hidden bg-white rounded-md items-center justify-center select-none"
              aria-label={`Carousel item ${item.title}`}
            >
              <div className="flex flex-col h-full overflow-hidden">
                <div className="h-[220px] relative select-none pointer-events-none rounded-md">
                  <Image
                    src={item.image}
                    alt={item.title}
                    layout="fill"
                    className="object-cover"
                    draggable="false"
                  />
                </div>
                <div className="p-7 flex-grow flex flex-col overflow-y-auto whitespace-normal">
                  <h5 className="text-primary mb-2 font-bold mt-0">
                    {item.title}
                  </h5>
                  <p className="text-sm whitespace-normal">{item.describe}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
