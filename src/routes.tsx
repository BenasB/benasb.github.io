import { Switch, Route } from 'react-router-dom';
import { importGenericFiles, importPosts } from 'utils/importFiles';
import Blog from './pages/index';
import NotFoundPage from './pages/404';

const Routes = () => {
  const markdownFiles = importPosts(
    require.context('assets/blog/', false, /^(?!\.\/).*\.mdx$/)
  );

  const excludedPages = ['404', 'index'];
  const pages = importGenericFiles(
    require.context('pages/', false, /^(?!\.\/).*\.tsx$/)
  ).filter((page) => !excludedPages.includes(page.slug)); // This will not work in the future (if the slug adds directory)

  return (
    <Switch>
      <Route exact path={'/'}>
        <Blog loadedPostMetaData={markdownFiles.map((post) => post.metadata)} />
      </Route>
      {pages.map((page, key) => {
        return (
          <Route
            exact
            path={`/${page.slug}`}
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
