import { Switch, Route } from 'react-router-dom';
import { importGenericFiles, importPosts } from 'utils/importFiles';
import CategoryPostList from 'templates/categoryPostList';
import Post from 'templates/post';
import { TopicData } from 'components/topicList/topicList';
import GlobalTopics from 'enums/globalTopics';

const Routes = () => {
  const posts = importPosts(
    'assets/blog/',
    require.context('assets/blog/', true, /^(?!\.\/).*\.mdx$/)
  );
  const postMetaData = posts.map((post) => post.metadata);
  const topics: TopicData[] = [{ title: GlobalTopics.ALL }];
  posts.forEach((post) => {
    const title = post.metadata.topic;
    if (!topics.some((t) => t.title === title)) topics.push({ title: title });
  });

  const excludedPages = ['404', 'index', 'post'];
  const pages = importGenericFiles(
    'pages/',
    require.context('pages/', true, /^(?!\.\/).*\.tsx$/)
  ).filter(
    (page) => !excludedPages.includes(page.relativeFilePathWithoutExtension)
  );

  return (
    <Switch>
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
            path={`/${post.relativeFilePathWithoutExtension}`}
            key={key}
          >
            <Post {...post} />
          </Route>
        );
      })}
      <Route path={'/:topic?'}>
        <CategoryPostList postMetaData={postMetaData} topics={topics} />
      </Route>
    </Switch>
  );
};

export default Routes;
