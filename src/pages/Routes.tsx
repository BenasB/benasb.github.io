import { Switch, Route } from 'react-router-dom';
import Foo from './foo';
import Bar from './bar';

const Routes = () => {
  return (
    <Switch>
      <Route path="/bar" component={Bar} />
      <Route path="/" component={Foo} />
    </Switch>
  );
};

export default Routes;
