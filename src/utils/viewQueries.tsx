import { useMediaQuery } from 'react-responsive';

export const MobileView: React.FC = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 576 });
  return isMobile ? <>{children}</> : null;
};

export const DefaultView: React.FC = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 577 });
  return isNotMobile ? <>{children}</> : null;
};
