import MetaTags from 'components/MetaTags';
import PostList from 'components/postList/postList';
import { PostMetaData } from 'components/postOverview/postOverview';
import { TopicData } from 'components/topicList/topicList';
import GlobalTopics from 'enums/globalTopics';
import { useParams } from 'react-router-dom';
import { capitalize } from 'utils/stringManipulation';
import NotFoundPage from '../pages/404';

interface Props {
  postMetaData: PostMetaData[];
  topics: TopicData[];
}

const CategoryPostList: React.FC<Props> = ({ topics, postMetaData }) => {
  const { topic } = useParams<{ topic: string }>();
  const selectedTopic: TopicData = topic
    ? { title: topic }
    : { title: GlobalTopics.ALL };

  if (topics.some((t) => t.title === selectedTopic.title))
    return (
      <>
        <MetaTags
          data={{
            title: `${capitalize(selectedTopic.title)} | Bx2 Blog`,
            description: `All Bx2 posts in '${capitalize(
              selectedTopic.title
            )}' topic`,
          }}
        />
        <PostList
          topics={topics}
          postMetaData={postMetaData}
          selectedTopic={selectedTopic}
        />
      </>
    );
  else return <NotFoundPage />;
};

export default CategoryPostList;
