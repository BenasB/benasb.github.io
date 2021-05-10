import MediaQuery from 'react-responsive';

export const MobileView: React.FC = ({ children }) => {
  return <MediaQuery maxWidth={576}>{children}</MediaQuery>;
};

export const DesktopView: React.FC = ({ children }) => {
  return <MediaQuery minWidth={577}>{children}</MediaQuery>;
};
