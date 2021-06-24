import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  href: string;
  className: string;
}

const PostLink: React.FC<Props> = ({ href, children, className }) => {
  // https://stackoverflow.com/a/5717133
  const isDomain = (url: string) => {
    const pattern = new RegExp(
      /(https?:\/\/(.+?\.)?bx2\.tech(\/[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*)?)/
    );
    return !!pattern.test(url);
  };

  if (isDomain(href)) {
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
