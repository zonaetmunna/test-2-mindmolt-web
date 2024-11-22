import BlogCard from '@/components/blog/BlogCard';
import Image from 'next/image';
import { Clock } from 'lucide-react';
import CTA from '@/components/CTAs/cta';
import { formattedDate } from '@/utils/formattedDate';
import { fetchBlogById } from '@/services/fetchBlogBySlug';
import { fetchBlogs } from '@/services/fetchBlogs';
import RichTextContent from '@/components/blog/RichTextContent';
import { Blog } from '@/types/blog';

type Params = Promise<{ slug: string }>;

// export const dynamic = 'force-dynamic';

export const dynamicParams = true;

export async function generateStaticParams() {
  try {
    const { blogs } = await fetchBlogs(1, 100);
    const paths = blogs.map((blog) => ({ slug: blog.slug || '' }));

    return paths.map((param: { slug: string }) => ({
      params: param,
    }));
  } catch (error) {
    console.error('Failed to generate static params:', error);
    return [];
  }
}

export default async function BlogDetails(props: { params: Params }) {
  const params = await props.params;
  const slug = params.slug;
  console.log('slug', slug);

  const blog = await fetchBlogById(slug); // Fetch blog by slug
  console.log('signle blog', blog);

  const page = 1;
  const perPage = 5;

  let blogs: any = [];
  let currentPage = page;
  let totalPages = 1;

  try {
    const { blogs: fetchedBlogs, total } = await fetchBlogs(page, perPage);
    blogs = fetchedBlogs;
    totalPages = Math.ceil(total / perPage);
  } catch (error) {
    console.error('Failed to fetch blogs:', error);
  }

  const getAbsoluteUrl = (url: string) => {
    return url.startsWith('//') ? `https:${url}` : url;
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <h1 className="text-5xl font-bold mb-4">
            {(blog?.blogTitle as string) || ''}
          </h1>
          <div className="flex items-center gap-2 mb-6">
            <Clock className="w-5 h-5  text-[#5C5C5C]" />
            <p className="text-[#5C5C5C] text-xl font-normal ">
              {formattedDate(blog?.createdAt || '')}
            </p>
          </div>

          <div className="relative w-full h-[600px] rounded-lg overflow-hidden">
            <Image
              src={getAbsoluteUrl(blog?.blogImage as string)}
              alt="Featured Image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="flex items-center gap-4 mb-10">
          <Image
            src={getAbsoluteUrl(blog?.authorImage as string)}
            alt={blog?.authorName as string}
            width={200}
            height={200}
            className="w-16 h-16 rounded-full"
          />
          <div className="flex flex-col  gap-1">
            <span className="text-3xl font-semibold text-[#000000]">
              {blog?.authorName}
            </span>
            <span className="text-[#7A7A7A] text-xl font-semibold">
              {blog?.authorDescription}
            </span>
          </div>
        </div>

        <div className="prose max-w-full mb-16 text-[#000000] text-xl leading-9">
          <RichTextContent content={blog?.content} />
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-10">Latest Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {blogs
              ?.slice(0, 3)
              .map((blog: Blog) => <BlogCard key={blog.id} blog={blog} />)}
          </div>
        </div>

        <div className="mt-16">
          <CTA withDescription={true} />
        </div>
      </div>
    </section>
  );
}
