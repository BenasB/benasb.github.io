import { BrowserRouter as Router } from 'react-router-dom';
import './styles/main.scss';
import Routes from 'routes';
import Header from 'components/header/header';
import ContentLayout from 'layouts/contentLayout';
import ScrollToTop from 'utils/ScrollToTop';

export const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop>
        <Header />
        <ContentLayout>
          <Routes />
        </ContentLayout>
      </ScrollToTop>
    </Router>
  );
};
