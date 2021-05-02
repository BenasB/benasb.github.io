import { useState } from 'react';
import style from './postList.module.scss';
import TopicList, { TopicData } from 'components/topicList/topicList';
import PostOverview, {
  PostMetaData,
} from 'components/postOverview/postOverview';

interface Props {
  postMetaData: PostMetaData[];
  topics: TopicData[];
}

const PostList: React.FC<Props> = ({ postMetaData, topics }) => {
  const getPostsByTopic = (topic: TopicData): PostMetaData[] => {
    if (topic.title !== 'all')
      return postMetaData.filter((post) => post.topic === topic.title);
    else return postMetaData;
  };

  const [shownPosts, setShownPosts] = useState<PostMetaData[]>(
    getPostsByTopic(topics[0])
  );

  const onTopicChange = (newTopic: TopicData) => {
    setShownPosts(getPostsByTopic(newTopic));
  };

  return (
    <div className={style.container}>
      <div className={style.sidePanel}>
        <h2 className={style.sidePanelTitle}>Topics</h2>
        <TopicList topics={topics} onTopicChange={onTopicChange} />
        <div className={style.pipeDecoration} />
      </div>
      <div className={style.content}>
        {shownPosts.map((data: PostMetaData, key: number) => {
          return <PostOverview {...data} key={key} />;
        })}
      </div>
    </div>
  );
};

export default PostList;
