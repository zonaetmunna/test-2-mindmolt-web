'use client';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

const Header: React.FC = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  const isWithBackground = pathname === '/contact-us';
  return (
    <header className={cn(isWithBackground ? 'bg-tertiary' : '')}>
      <div className="container  py-4 relative flex items-center">
        <div className="flex gap-6">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/images/Logo.svg"
                alt="Mindmolt Logo"
                width={200}
                height={48}
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-5 whitespace-nowrap font-figtree  font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-12 rounded-md px-6 text-base hover:bg-accent hover:text-accent-foreground  [text-shadow:_0_4px_12px_hsl(200_97_74_/_0.3)]">
            <Link
              href="/how-it-works"
              className={`hover:text-[#0070CB] ${pathname === '/how-it-works' ? 'text-[#0070CB]' : ''}`}
            >
              How It Works
            </Link>
            <Link
              href="/blogs"
              className={`hover:text-[#0070CB] ${pathname === '/blogs' ? 'text-[#0070CB]' : ''}`}
            >
              Blogs
            </Link>
          </div>
        </div>
        <div className="hidden md:flex items-center ml-auto whitespace-nowrap rounded-md font-figtree text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow-lg shadow-shadow  active:translate-y-[2px] hover:bg-primary/90 normal-case h-12 px-6">
          <Link href="#">Get the app</Link>
        </div>
        <button
          onClick={toggleMobileMenu}
          type="button"
          className="md:hidden ml-auto"
          aria-label="toggle Mobile Menu"
        >
          <Image src="/images/menu.svg" alt="Menu" width={24} height={24} />
        </button>
        <div
          className={`${
            isMobileMenuOpen ? 'block' : 'hidden'
          } absolute z-50 md:hidden w-full right-0 top-full border-t border-border mt-4 pt-12 pb-12 bg-background drop-shadow-lg`}
        >
          <div className="flex flex-col items-center gap-8 font-figtree font-medium">
            <div>
              <Link
                href="/how-it-works"
                className="flex justify-center items-center h-12 rounded-md px-6 text-base hover:bg-accent hover:text-accent-foreground  [text-shadow:_0_4px_12px_hsl(200_97_74_/_0.3)]"
              >
                How It Works
              </Link>
              <Link
                href="/blogs"
                className="flex justify-center items-center h-12 rounded-md px-6 text-base hover:bg-accent hover:text-accent-foreground  [text-shadow:_0_4px_12px_hsl(200_97_74_/_0.3)]"
              >
                Blogs
              </Link>
            </div>

            <Link
              href="#"
              className="flex justify-center items-center h-12 rounded-md px-6 text-base bg-primary text-primary-foreground shadow-lg shadow-shadow  active:translate-y-[2px] hover:bg-primary/90 normal-case"
            >
              Get the app
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
