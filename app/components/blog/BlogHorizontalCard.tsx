'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { formattedDate } from '@/utils/formattedDate';
import CalanderSVG from './CalanderSVG';

interface BlogProps {
  blog: any;
  index: number;
}

function ensureAbsoluteUrl(url: string) {
  if (!url) return '';
  return url.startsWith('//') ? `https:${url}` : url;
}

const BlogHorizontalCard: React.FC<BlogProps> = ({ blog, index }) => {
  const getAbsoluteUrl = (url: string) => {
    return url.startsWith('//') ? `https:${url}` : url;
  };

  console.log('blog', blog);

  return (
    <div
      key={index}
      className="flex flex-col md:flex-row items-start md:items-center px-8 py-8 rounded-lg  gap-8 md:gap-12   bg-[#F2F9FF]"
    >
      {/* Left Section - Blog Image */}
      <div className="w-full md:w-2/5 max-h-[400px]  flex justify-center items-center rounded-lg ">
        <Image
          src={getAbsoluteUrl(blog?.blogImage)}
          alt={blog?.blogTitle || 'Blog Image'}
          width={500}
          height={500}
          className="rounded-xl w-full h-full object-cover"
        />
      </div>

      {/* Right Section - Blog Info */}
      <div className="w-full md:w-3/5 flex flex-col items-start ">
        {/* Blog Header */}
        <div className="flex justify-start items-center gap-2 mb-5  font-figtree ">
          <CalanderSVG className="w-6 h-6 text-gray-500" />
          <span className="text-gray-500 text-lg font-semibold">
            {formattedDate(blog?.createdAt)}
          </span>
        </div>

        <div className="flex flex-col mb-5">
          <Link href={`/blogs/${blog?.slug}`}>
            <h3 className="text-lg md:text-4xl font-bold leading-6 md:leading-10 text-[#05192E] mb-5 ">
              {blog?.blogTitle || 'Untitled Blog'}
            </h3>
          </Link>
          <div className="text-[#47494B] text-base leading-7">
            {/* {getFirst200Letters(blog?.blogContent)} */}
            <p>{blog?.blogSummary}</p>
          </div>
        </div>

        {/* Author Info */}
        <div className="flex items-center gap-3 mt-auto">
          <div className="rounded-full ">
            <Image
              src={getAbsoluteUrl(blog.authorImage)}
              alt={blog?.authorName || 'Author Image'}
              width={40}
              height={40}
              className="w-10 h-10 rounded-full"
            />
          </div>

          <div>
            <p className="text-lg font-semibold text-[#474A4E] font-figtree">
              {blog?.authorName}
            </p>
          </div>
        </div>

        {/* Read More Button */}
        {/* <div className="mt-6">
          <Link
            href={`/blogs/${blog?.sys?.id}`}
            className="inline-block px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-md text-sm font-medium shadow-lg transition-transform transform active:translate-y-1"
          >
            Read More
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default BlogHorizontalCard;
