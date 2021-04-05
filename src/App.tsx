import { BrowserRouter as Router } from 'react-router-dom';
import './styles.css';
import Routes from './pages/Routes';

export const App: React.FC = () => {
  return (
    <Router>
      <Routes />
    </Router>
  );
};
