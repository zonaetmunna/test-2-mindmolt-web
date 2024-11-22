import BlogCTA from '@/components/blog/BlogCTA';
import BlogSection from '@/components/blog/BlogSection';
import { fetchBlogs } from '@/services/fetchBlogs';

export const metadata = {
  title: 'MindMolt – Break Free from Porn Addiction',
  description:
    'Use MindMolt to overcome porn addiction by blocking explicit content across devices, tracking your progress, and enjoying access to safe entertainment apps and programs.',
};

// export const dynamic = 'force-dynamic';

export default async function Blogs({
  searchParams: searchParamsPromise,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await searchParamsPromise;

  // Pagination parameters
  const page = Number(searchParams['page'] ?? '1');
  const perPage = Number(searchParams['per_page'] ?? '5');

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
