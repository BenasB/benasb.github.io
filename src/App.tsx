import { BrowserRouter as Router } from 'react-router-dom';
import './styles/main.scss';
import Routes from 'routes';
import Header from 'components/header/header';
import ContentLayout from 'layouts/contentLayout';

export const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <ContentLayout>
        <Routes />
      </ContentLayout>
    </Router>
  );
};
