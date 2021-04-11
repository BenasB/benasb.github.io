import { BrowserRouter as Router } from 'react-router-dom';
import './styles/main.scss';
import Routes from 'pages/routes';
import Header from 'components/header/header';

export const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes />
    </Router>
  );
};
