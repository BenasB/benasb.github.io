import MediaQuery from 'react-responsive';

export const MobileView: React.FC = ({ children }) => {
  return <MediaQuery maxDeviceWidth={576}>{children}</MediaQuery>;
};

export const DesktopView: React.FC = ({ children }) => {
  return <MediaQuery minDeviceWidth={577}>{children}</MediaQuery>;
};
