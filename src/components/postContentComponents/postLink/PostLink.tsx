import React from 'react';
import { Link } from 'react-router-dom';
import { isDomain, isURL } from 'utils/stringManipulation';

interface Props {
  href: string;
  className: string;
}

const PostLink: React.FC<Props> = ({ href, children, className }) => {
  const exceptions: string[] = ['https://bx2.tech/vu-lff/'];
  if ((isDomain(href) || !isURL(href)) && !exceptions.includes(href)) {
    return (
      <Link className={className} to={href.replace(/^.*\/\/[^\/]+/, '')}>
        {children}
      </Link>
    );
  } else {
    return (
      <a
        className={className}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }
};

export default PostLink;
