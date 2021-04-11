import { Switch, Route } from 'react-router-dom';
import Blog from './blog';
import Me from './me';
import NotFoundPage from './404';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Blog} />
      <Route exact path="/me" component={Me} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default Routes;
