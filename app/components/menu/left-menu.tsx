'use client';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const left_sidebar_data = [
  {
    slug: '/privacy-policy',
    name: 'Privacy Policy',
  },
  {
    slug: '/terms',
    name: 'Terms of Use',
  },
  {
    slug: '/disclaimer',
    name: 'Disclaimer',
  },
  {
    slug: '/eula',
    name: 'EULA',
  },
  {
    slug: '/refund-policy',
    name: 'Refund Policy',
  },
  {
    slug: '/cookie-policy',
    name: 'Cookie Policy',
  },
  {
    slug: '/gdpr',
    name: 'GDPR Compliance',
  },
];

export const LeftMenu = () => {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex flex-col pt-10 gap-4 w-[200px] h-[200px]">
      {left_sidebar_data.map((e) => (
        <Link
          key={e.slug}
          href={e.slug}
          className={cn(
            buttonVariants({ variant: 'link' }),
            'w-fit px-0',
            pathname === e.slug ? 'text-primary font-bold' : 'text-foreground',
          )}
        >
          {e.name}
        </Link>
      ))}
    </div>
  );
};
