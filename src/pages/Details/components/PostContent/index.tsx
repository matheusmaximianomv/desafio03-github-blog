import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import { PostContentContainer } from './styles';

interface IPostContentProps {
  markdown: string;
}

export function PostContent({ markdown }: IPostContentProps) {
  return (
    <PostContentContainer>
      <ReactMarkdown
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className ?? '');
            return !inline && match ? (
              <SyntaxHighlighter
                language={match[1]}
                {...props}
                style={nightOwl}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {markdown}
      </ReactMarkdown>
    </PostContentContainer>
  );
}
