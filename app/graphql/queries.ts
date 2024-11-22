import { gql } from 'graphql-request';

export const GET_BLOG_POSTS = gql`
  query {
    blogPostCollection {
      items {
        title
        slug
        body {
          json
        }
        publishedDate
      }
    }
  }
`;
