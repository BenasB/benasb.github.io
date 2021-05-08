import PostList from 'components/postList/postList';
import { PostMetaData } from 'components/postOverview/postOverview';
import { TopicData } from 'components/topicList/topicList';
import GlobalTopics from 'enums/globalTopics';
import { useParams } from 'react-router-dom';
import NotFoundPage from './404';

interface Props {
  postMetaData: PostMetaData[];
  topics: TopicData[];
}

const Index: React.FC<Props> = ({ topics, postMetaData }) => {
  const { topic } = useParams<{ topic: string }>();
  const selectedTopic: TopicData = topic
    ? { title: topic }
    : { title: GlobalTopics.ALL };

  if (topics.some((t) => t.title === selectedTopic.title))
    return (
      <PostList
        topics={topics}
        postMetaData={postMetaData}
        selectedTopic={selectedTopic}
      />
    );
  else return <NotFoundPage />;
};

export default Index;
