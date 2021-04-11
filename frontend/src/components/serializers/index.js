import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// Using 'csj' instead of 'esm' because: https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/230
import dark from 'react-syntax-highlighter/dist/cjs/styles/prism/dark.js';

// Serialize output of 'code' blocks
const serializers = {
  types: {
    author: ({ node }) => node?.author?.name && <span>{node.author.name}</span>,
    code: ({ node }) => (
      <SyntaxHighlighter language={node?.language} style={dark}>
        {node?.code}
      </SyntaxHighlighter>
    ),
  },
};

export default serializers;
