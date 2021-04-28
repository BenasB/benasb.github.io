import { Switch, Route } from 'react-router-dom';
import { importGenericFiles, importPosts } from 'utils/importFiles';
import Blog from './pages/index';
import NotFoundPage from './pages/404';

const Routes = () => {
  const markdownFiles = importPosts(
    'assets/blog/',
    require.context('assets/blog/', true, /^(?!\.\/).*\.mdx$/)
  );

  const excludedPages = ['404', 'index'];
  const pages = importGenericFiles(
    'pages/',
    require.context('pages/', true, /^(?!\.\/).*\.tsx$/)
  ).filter(
    (page) => !excludedPages.includes(page.relativeFilePathWithoutExtension)
  );

  return (
    <Switch>
      <Route exact path={'/'}>
        <Blog loadedPostMetaData={markdownFiles.map((post) => post.metadata)} />
      </Route>
      {pages.map((page, key) => {
        return (
          <Route
            exact
            path={`/${page.relativeFilePathWithoutExtension}`}
            key={key}
            component={page.component}
          />
        );
      })}
      {markdownFiles.map((post, key) => {
        return (
          <Route
            exact
            path={`/${post.relativeFilePathWithoutExtension}`}
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
