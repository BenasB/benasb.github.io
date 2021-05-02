import PostList from 'components/postList/postList';
import { PostMetaData } from 'components/postOverview/postOverview';
import { TopicData } from 'components/topicList/topicList';

interface Props {
  postMetaData: PostMetaData[];
  topics: TopicData[];
}

const Index: React.FC<Props> = ({ postMetaData, topics }) => {
  return (
    <>
      <PostList postMetaData={postMetaData} topics={topics} />
    </>
  );
};

export default Index;
