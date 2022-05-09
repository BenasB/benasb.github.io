import { BrowserRouter as Router } from 'react-router-dom';
import './styles/main.scss';
import style from './app.module.scss';
import Routes from 'routes';
import Header from 'components/header/Header';
import ContentLayout from 'layouts/contentLayout';
import ScrollToTop from 'utils/ScrollToTop';

export const App: React.FC = () => {
  return (
    <div className='theme--light'>
      <div className={style.app}>
        <Router>
          <ScrollToTop>
            <Header />
            <ContentLayout>
              <Routes />
            </ContentLayout>
          </ScrollToTop>
        </Router>
      </div>
    </div>
  );
};
