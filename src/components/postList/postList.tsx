import { Redirect, useParams } from 'react-router-dom';
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
  const { topic } = useParams<{ topic: string }>();
  const selectedTopic: TopicData = topic ? { title: topic } : { title: 'all' };

  const getPostsByTopic = (topic: TopicData): PostMetaData[] => {
    postMetaData.sort((a, b) => b.date.getTime() - a.date.getTime());

    if (topic.title !== 'all')
      return postMetaData.filter((post) => post.topic === topic.title);
    else return postMetaData;
  };

  const shownPosts: PostMetaData[] = getPostsByTopic(selectedTopic);

  // Topic was provided, but no posts shown, redirect to 404
  if (shownPosts.length === 0) return <Redirect to={'/404'} />;

  return (
    <div className={style.container}>
      <div className={style.sidePanel}>
        <h2 className={style.sidePanelTitle}>Topics</h2>
        <TopicList topics={topics} />
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
