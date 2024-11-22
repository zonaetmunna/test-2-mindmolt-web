export interface FileDetails {
  size: number;
  image?: {
    width: number;
    height: number;
  };
}

export interface File {
  url: string;
  contentType: string;
  details: FileDetails;
}

export interface ContentfulImage {
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
export interface RichTextNode {
  nodeType: string;
  data: Record<string, unknown>;
  content: RichTextNode[] | string[];
}

// Blog Content Type
export interface BlogContent {
  content: RichTextNode[];
  nodeType: string;
  data: Record<string, unknown>;
}

// Author Type
export interface Author {
  fields: {
    authorName: string;
    authorDescription: string;
    authorImage?: ContentfulImage;
  };
}

// Blog Type
export interface Blog {
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
export type FetchBlogResponse = Blog | null;
