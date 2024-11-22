export async function generateStaticParams() {
  try {
    const { blogs } = await fetchBlogs(1, 100);
    const totalPage = Math.ceil(blogs.length / 6);
    const paths = Array(totalPage)
      .fill(0)
      .map((_, key) => ({
        page: String(key + 1),
      }));

    return paths;
  } catch (error) {
    console.error('Failed to generate static params:', error);
    return [];
  }
}

import BlogCTA from '@/components/blog/BlogCTA';
import BlogSection from '@/components/blog/BlogSection';
import { fetchBlogs } from '@/services/fetchBlogs';

export const metadata = {
  title: 'MindMolt – Break Free from Porn Addiction',
  description:
    'Use MindMolt to overcome porn addiction by blocking explicit content across devices, tracking your progress, and enjoying access to safe entertainment apps and programs.',
};

type Params = Promise<{ page: number }>;

export default async function Blogs(props: { params: Params }) {
  const params = await props.params;
  const page = params.page || 1;
  const perPage = 6;

  let blogs: any = [];
  let currentPage = Number(page);
  let totalPages = 1;

  try {
    const { blogs: fetchedBlogs, total } = await fetchBlogs(page, perPage);
    blogs = fetchedBlogs;
    totalPages = Math.ceil(total / perPage);
  } catch (error) {
    console.error('Failed to fetch blogs:', error);
  }

  return (
    <section className="bg-accent">
      <div className="container mx-auto">
        <div>
          {blogs.length > 0 ? (
            <BlogSection
              blogs={blogs}
              currentPage={currentPage}
              totalPages={totalPages}
            />
          ) : (
            <p className="text-center text-red-500">
              No blogs available at the moment. Please try again later.
            </p>
          )}
        </div>
      </div>
      <div className="mt-16">
        <BlogCTA withDescription={true} />
      </div>
    </section>
  );
}
