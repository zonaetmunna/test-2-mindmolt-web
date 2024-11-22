import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'next/image';
import React from 'react';

const RichTextContent = ({ content }: any) => {
  if (!content || !Array.isArray(content)) {
    console.error('Invalid content passed to RichTextContent:', content);
    return <p>No content available.</p>;
  }

  const renderOptions = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => (
        <p className="text-gray-700 leading-7 mb-4">{children}</p>
      ),
      [BLOCKS.HEADING_1]: (node: any, children: React.ReactNode) => (
        <h1 className="text-gray-700 text-3xl font-semibold mb-4">
          {children}
        </h1>
      ),
      [BLOCKS.HEADING_2]: (node: any, children: React.ReactNode) => (
        <h2 className="text-gray-700 text-2xl font-semibold mb-3">
          {children}
        </h2>
      ),
      [BLOCKS.HEADING_3]: (node: any, children: React.ReactNode) => (
        <h3 className="text-gray-700 text-xl font-semibold mb-2">{children}</h3>
      ),
      [BLOCKS.UL_LIST]: (node: any, children: React.ReactNode) => (
        <ul className="list-disc list-outside pl-6 mb-4 text-gray-700">
          {React.Children.map(children, (child) =>
            React.cloneElement(child as React.ReactElement, {
              type: 'unordered',
            }),
          )}
        </ul>
      ),
      [BLOCKS.OL_LIST]: (node: any, children: React.ReactNode) => (
        <ol className="list-decimal list-outside pl-6 mb-4 text-gray-700">
          {React.Children.map(children, (child) =>
            React.cloneElement(child as React.ReactElement, {
              type: 'ordered',
            }),
          )}
        </ol>
      ),

      [BLOCKS.LIST_ITEM]: (node: any, children: React.ReactNode) => {
        const listType = node?.type || 'unordered'; // Default to unordered if not provided
        return (
          <li
            className={`text-gray-700 mb-2 ${
              listType === 'unordered' ? 'list-disc' : 'list-decimal'
            }`}
          >
            {children}
          </li>
        );
      },

      // for underline

      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        const { file, title } = node.data.target.fields || {};
        return (
          <Image
            src={file?.url}
            alt={title || 'Embedded Asset'}
            className="w-full rounded-lg my-4"
          />
        );
      },
      [INLINES.HYPERLINK]: (node: any, children: React.ReactNode) => (
        <a
          href={node.data.uri}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline hover:text-blue-700"
        >
          {children}
        </a>
      ),
    },
  };

  return (
    <>
      {content.map((richTextNode, index) => (
        <div key={index}>
          {documentToReactComponents(richTextNode, renderOptions)}
        </div>
      ))}
    </>
  );
};

export default RichTextContent;
