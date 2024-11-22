import React from 'react';
import BlogHorizontalCard from './BlogHorizontalCard';
import PaginationControls from './PaginationControls';
import { Blog } from '@/types/blog';

const BlogSection = ({
  blogs: initialBlogs,
  currentPage,
  totalPages,
}: {
  blogs: Blog[];
  currentPage: number;
  totalPages: number;
}) => {
  return (
    <div className="bg-accent lg:bg-transparent py-12 ">
      <h2 className="text-center text-5xl font-bold mb-4">All Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-8  md:gap-6">
        {initialBlogs.map((blog, index) => (
          <BlogHorizontalCard key={blog.slug} blog={blog} index={index} />
        ))}
      </div>

      <PaginationControls currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
};

export default BlogSection;
