import { createClient } from 'contentful';

console.log('Contentful Space ID:', process.env.CONTENTFUL_SPACE_ID);
console.log('Contentful Access Token:', process.env.CONTENTFUL_ACCESS_TOKEN);

const contentfulClient = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || '',
  environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT || 'master',
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || '',
  host: 'cdn.contentful.com',
});

export default contentfulClient;
