import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// Using 'csj' instead of 'esm' because: https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/230
import dark from 'react-syntax-highlighter/dist/cjs/styles/prism/dark.js';

// Serialize output of 'code' blocks
const serializers = {
  types: {
    author: ({ node = {} }) => {
      const { author } = node;
      return <>{author?.name && <span>{author.name}</span>}</>;
    },
    code: ({ node = {} }) => {
      const { code, language } = node;
      return (
        <>
          {code ? (
            <SyntaxHighlighter language={language || 'text'} style={dark}>
              {code}
            </SyntaxHighlighter>
          ) : null}
        </>
      );
    },
  },
};

export default serializers;
