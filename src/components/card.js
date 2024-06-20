// components/Card.js
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialOceanic } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Card({ message, from }) {
  return (
    <div className={`p-4 m-2 rounded-md max-w-xs text-base font-sans break-words width-fit-content ${from === 'bot' ? 'shadow-inner shadow-blue-500/40 self-end' : 'bg-gray-600 self-start'}`}>
      <div className="markdown">
        <ReactMarkdown
        className={`text-start`}
          children={message}
          remarkPlugins={[remarkGfm]}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, '')}
                  style={materialOceanic}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            }
          }}
        />
      </div>
    </div>
  );
}

export default Card;
