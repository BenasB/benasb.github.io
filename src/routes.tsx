import { Switch, Route } from 'react-router-dom';
import { importGenericFiles, importPosts } from 'utils/importFiles';
import Index from './pages/index';
import NotFoundPage from './pages/404';
import { TopicData } from 'components/topicList/topicList';
import { capitalize } from 'utils/stringManipulation';

const Routes = () => {
  const posts = importPosts(
    'assets/blog/',
    require.context('assets/blog/', true, /^(?!\.\/).*\.mdx$/)
  );
  const postMetaData = posts.map((post) => post.metadata);
  const topics: TopicData[] = [];
  posts.forEach((post) => {
    const title = capitalize(post.metadata.topic);
    if (!topics.some((t) => t.title === title)) topics.push({ title: title });
  });

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
        <Index postMetaData={postMetaData} topics={topics} />
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
      {posts.map((post, key) => {
        return (
          <Route
            exact
            path={`/blog/${post.relativeFilePathWithoutExtension}`}
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
