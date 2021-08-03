import { Switch, Route } from 'react-router-dom';
import { importGenericFiles, importPosts } from 'utils/importFiles';
import PostList from 'templates/postList/PostList';
import Post from 'templates/post/Post';
import { TopicData } from 'components/topicList/TopicList';
import GlobalTopics from 'enums/globalTopics';
import NotFoundPage from 'pages/404';

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

  const excludedPages = ['404'];
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
      {topics.map((topic, key) => {
        return (
          <Route
            exact
            path={`/${topic.title === GlobalTopics.ALL ? '' : topic.title}`}
            key={key}
          >
            <PostList
              postMetaData={postMetaData}
              topics={topics}
              selectedTopic={topic}
            />
          </Route>
        );
      })}
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default Routes;
