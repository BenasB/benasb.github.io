import { Switch, Route } from 'react-router-dom';
import importFiles from 'utils/importFiles';
import NotFoundPage from './404';

const Routes = () => {
  const markdownFiles = importFiles(
    require.context('assets/blog/', false, /^(?!\.\/).*\.mdx$/)
  );

  const excludedPages = ['routes', '404'];
  const pages = importFiles(
    require.context('pages/', false, /^(?!\.\/).*\.tsx$/)
  ).filter((page) => !excludedPages.includes(page.slug));

  return (
    <Switch>
      {pages.map((page, key) => {
        return (
          <Route
            exact
            path={page.slug === 'index' ? '/' : `/${page.slug}`}
            key={key}
            component={page.component}
          />
        );
      })}
      {markdownFiles.map((post, key) => {
        return (
          <Route
            exact
            path={`/blog/${post.slug}`}
            key={key}
            component={post.component}
          />
        );
      })}
      {/* Supposed to be the last, because this is where the route falls back if no other route befor it matches */}
      <Route component={NotFoundPage} />{' '}
    </Switch>
  );
};

export default Routes;
