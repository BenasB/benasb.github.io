// https://stackoverflow.com/questions/36904185/react-router-scroll-to-top-on-every-transition

import React, { useEffect, Fragment } from 'react';
import { useHistory } from 'react-router-dom';

const ScrollToTop: React.FC = ({ children }) => {
  const history = useHistory();

  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    });
    return () => {
      unlisten();
    };
  }, [history]);

  return <Fragment>{children}</Fragment>;
};

export default ScrollToTop;
