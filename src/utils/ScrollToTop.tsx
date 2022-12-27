import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = ({ children }) => {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash === '') window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    else
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) element.scrollIntoView();
      }, 0);
  }, [pathname, hash, key]);

  return <>{children}</>;
};

export default ScrollToTop;
