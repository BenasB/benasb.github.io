import { BrowserRouter as Router } from 'react-router-dom';
import './styles/main.scss';
import Routes from 'routes';
import Header from 'components/header/header';
import MainLayout from 'layouts/mainLayout';

export const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <MainLayout>
        <Routes />
      </MainLayout>
    </Router>
  );
};
