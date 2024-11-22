import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export const getFirst200Letters = (content: any) => {
  if (!content?.json) return null;

  let letterCount = 0;

  // Traverse and slice content by letter count
  const slicedContent = {
    ...content.json,
    content: content.json.content.reduce((acc: any, node: any) => {
      if (letterCount >= 100) return acc;

      if (node.nodeType === BLOCKS.PARAGRAPH) {
        const paragraphText = node.content
          .map((textNode: any) =>
            typeof textNode.value === 'string' ? textNode.value : '',
          )
          .join('');

        const remainingLetters = 100 - letterCount;
        const lettersToTake = Math.min(remainingLetters, paragraphText.length);

        // Slice the text and update the letter count
        const slicedText = paragraphText.slice(0, lettersToTake);
        letterCount += lettersToTake;

        // Add the sliced paragraph to the accumulator
        acc.push({
          ...node,
          content: [
            {
              ...node.content[0],
              value: slicedText,
            },
          ],
        });
      } else {
        // If it's not a paragraph node, include it as is
        acc.push(node);
      }

      return acc;
    }, []),
  };

  // Define rendering options for uniform styling
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_node: any, children: React.ReactNode) => (
        <span className="text-gray-700">{children}</span>
      ),
      [BLOCKS.HEADING_1]: (_node: any, children: React.ReactNode) => (
        <span className="text-gray-700 font-normal text-base leading-3">
          {children}
        </span>
      ),
      [BLOCKS.HEADING_2]: (_node: any, children: React.ReactNode) => (
        <span className="text-gray-700 font-normal text-base leading-3">
          {children}
        </span>
      ),
      [BLOCKS.HEADING_3]: (_node: any, children: React.ReactNode) => (
        <span className="text-gray-700 font-normal text-base leading-3">
          {children}
        </span>
      ),
      [BLOCKS.HEADING_4]: (_node: any, children: React.ReactNode) => (
        <span className="text-gray-700 font-normal text-base leading-3">
          {children}
        </span>
      ),
      [BLOCKS.HEADING_5]: (_node: any, children: React.ReactNode) => (
        <span className="text-gray-700 font-normal text-base leading-3">
          {children}
        </span>
      ),
      [BLOCKS.HEADING_6]: (_node: any, children: React.ReactNode) => (
        <span className="text-gray-700 font-normal text-base leading-3">
          {children}
        </span>
      ),
      [BLOCKS.UL_LIST]: (_node: any, children: React.ReactNode) => (
        <span className="text-gray-700 font-normal text-base leading-3">
          {children}
        </span>
      ),
      [BLOCKS.OL_LIST]: (_node: any, children: React.ReactNode) => (
        <span className="text-gray-700 font-normal text-base leading-3">
          {children}
        </span>
      ),
      [BLOCKS.LIST_ITEM]: (_node: any, children: React.ReactNode) => (
        <span className="text-gray-700 font-normal text-base leading-3">
          {children}
        </span>
      ),
      [INLINES.HYPERLINK]: (_node: any, children: React.ReactNode) => (
        <span className="text-gray-700 font-normal text-base leading-3">
          {children}
        </span>
      ),
    },
  };

  return documentToReactComponents(slicedContent, options);
};
