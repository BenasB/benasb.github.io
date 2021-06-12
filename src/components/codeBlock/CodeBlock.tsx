import React from 'react';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/vsDark';
import Prism from 'prism-react-renderer/prism';

// Some hackery to add C# support
// https://github.com/FormidableLabs/prism-react-renderer/issues/53

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const globalAny: any = global;
(typeof globalAny !== 'undefined' ? globalAny : window).Prism = Prism;
require('prismjs/components/prism-csharp');

const CodeBlock: React.FC<{ className: string }> = ({
  children,
  className,
}) => {
  const language = className
    ?.replace(/language-/, '')
    .toLowerCase() as Language;

  return (
    <Highlight
      {...defaultProps}
      code={(children as string).trim()}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={{ ...style, padding: '20px', borderRadius: '5px' }}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default CodeBlock;
