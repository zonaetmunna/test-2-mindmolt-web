import contentfulClient from '@/lib/contentful';
import { createClient, Entry, EntrySkeletonType } from 'contentful';

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

// Blog Content Type
interface BlogContent {
  content: RichTextNode[];
  nodeType: string;
  data: Record<string, unknown>;
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
type FetchBlogResponse = Blog | null;

type BlogEntry = Entry<{
  fields: {
    blogTitle: string;
    blogSummary: string;
    blogImage: ContentfulImage;
    blogContent: BlogContent;
    author: Author;
    slug: string;
  };
  contentTypeId: string;
}> &
  EntrySkeletonType;

// Typing for Contentful response items using Entry

export async function fetchBlogById(slug: string): Promise<FetchBlogResponse> {
  try {
    const response = await contentfulClient.getEntries<BlogEntry>({
      content_type: 'blogs', // Ensure 'blogs' is the correct content type
      'fields.slug[match]': slug, // Filter by the slug field
      limit: 1, // Fetch only one blog post with the matching slug
    });

    // If no blog found, return null
    if (!response.items || response.items.length === 0) {
      return null;
    }

    // Type the response items as BlogEntry
    const blogData = response.items[0];
    const { fields, sys } = blogData;

    // Extracting fields and sys from the response
    const { author, blogContent, blogTitle, blogSummary, blogImage } = fields;

    // Ensure that the required fields exist
    if (!blogTitle || !blogSummary) {
      console.error('Blog title or summary is missing');
      return null;
    }

    // Return a structured blog object
    return {
      id: sys.id,
      blogTitle: blogTitle as string,
      blogSummary: blogSummary as string,
      authorName: (author as any).fields.authorName as string,
      authorDescription: (author as any).fields.authorDescription as string,
      authorImage: (author as any).fields.authorImage?.fields?.file?.url
        ? `https:${(author as any).fields.authorImage.fields.file.url}`
        : undefined,
      content: (blogContent as any).content,
      blogImage: (blogImage as any).fields.file?.url
        ? `https:${(blogImage as any).fields.file.url}`
        : undefined,
      createdAt: sys.createdAt,
      published: true,
      slug: fields.slug || '', // Return an empty string if slug is undefined
    };
  } catch (error) {
    console.error('Error fetching blog by ID:', error);
    return null;
  }
}
