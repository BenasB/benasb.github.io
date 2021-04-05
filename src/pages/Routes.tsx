import { Switch, Route } from 'react-router-dom';
import Foo from './foo';
import Bar from './bar';
import NotFoundPage from './404';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/bar" component={Bar} />
      <Route exact path="/" component={Foo} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default Routes;
