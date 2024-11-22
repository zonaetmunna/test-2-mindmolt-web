'use client';
import React from 'react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const CTALink = () => {
  const [platformLink, setPlatformLink] = useState('#');
  useEffect(() => {
    // Detect platform
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    console.log(userAgent);

    if (/android/i.test(userAgent)) {
      setPlatformLink(process.env.NEXT_PUBLIC_ANDROID_APP_LINK ?? '#'); // Replace with your app's Play Store link
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      setPlatformLink(process.env.NEXT_PUBLIC_IOS_APP_LINK ?? '#'); // Replace with your app's App Store link
    } else if (
      /Macintosh/i.test(userAgent) &&
      !/iPad|iPhone|iPod/.test(userAgent)
    ) {
      setPlatformLink(process.env.NEXT_PUBLIC_MACOS_APP_LINK ?? '#');
    } else if (/Windows/i.test(userAgent)) {
      setPlatformLink(process.env.NEXT_PUBLIC_WINDOWS_APP_LINK ?? '#'); // Microsoft Store link
    } else {
      setPlatformLink('#'); // Replace with your website link or default
    }
  }, []);
  return <Link href={platformLink}>Get the app</Link>;
};

export default CTALink;
