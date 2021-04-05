import { BrowserRouter as Router } from 'react-router-dom';
import './styles/main.scss';
import Routes from './pages/Routes';

export const App: React.FC = () => {
  return (
    <Router>
      <Routes />
    </Router>
  );
};
