import contentfulClient from '@/lib/contentful';

// Contentful Base Types
interface FileDetails {
  size: number;
  image?: {
    width: number;
    height: number;
  };
}

interface File {
  url: string;
  contentType: string;
  details: FileDetails;
}

interface ContentfulImage {
  fields: {
    title: string;
    description: string;
    file: File;
  };
  metadata: {
    tags: string[];
    concepts: string[];
  };
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
  };
}

// Rich Text Content Type
interface RichTextNode {
  nodeType: string;
  data: Record<string, unknown>;
  content: RichTextNode[] | string[];
}

// Author Type
interface Author {
  fields: {
    authorName: string;
    authorDescription: string;
    authorImage?: ContentfulImage;
  };
}

// Blog Type
interface Blog {
  id: string;
  blogTitle: string;
  blogSummary: string;
  blogImage?: string; // URL of the blog image
  content: RichTextNode[];
  authorName: string;
  authorDescription: string;
  authorImage?: string; // URL of the author image
  createdAt: string;
  published: boolean;
  slug?: string;
}

// Function Response Type
export interface FetchBlogsResponse {
  blogs: Blog[];
  total: number;
}

export async function fetchBlogs(
  page = 1,
  perPage = 5,
): Promise<FetchBlogsResponse> {
  const skip = (page - 1) * perPage;

  const response = await contentfulClient.getEntries({
    content_type: 'blogs', // Ensure 'blog' is the correct content type
    limit: perPage,
    skip: skip,
  });

  const blogs = response.items.map((item) => {
    // Assert item to the expected Contentful Entry type
    const { fields, sys } = item as {
      fields: { [key: string]: any };
      sys: { id: string; createdAt: string };
    };

    const { author, blogContent, blogTitle, blogSummary, blogImage } = fields;

    // Return a structured blog object
    return {
      id: sys.id,
      blogTitle: blogTitle as string,
      blogSummary: blogSummary as string,
      authorName: author?.fields?.authorName || '',
      authorDescription: author?.fields?.authorDescription || '',
      authorImage: author?.fields?.authorImage?.fields?.file?.url
        ? `https:${author.fields.authorImage.fields.file.url}`
        : undefined,
      content: blogContent?.content || [],
      blogImage: blogImage?.fields?.file?.url
        ? `https:${blogImage.fields.file.url}`
        : undefined,
      createdAt: sys.createdAt,
      published: true,
      slug: fields.slug,
    };
  });

  return {
    blogs: blogs,
    total: response.total,
  };
}
