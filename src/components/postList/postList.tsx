import style from './postList.module.scss';
import TopicList, { TopicData } from 'components/topicList/topicList';
import PostOverview, {
  PostMetaData,
} from 'components/postOverview/postOverview';
import GlobalTopics from 'enums/globalTopics';
import TopicDropdown from 'components/topicDropdown/topicDropdown';
import { useMediaQuery } from 'react-responsive';
import Breakpoints from 'enums/breakpoints';

interface Props {
  postMetaData: PostMetaData[];
  topics: TopicData[];
  selectedTopic: TopicData;
}

const PostList: React.FC<Props> = ({ postMetaData, topics, selectedTopic }) => {
  const isMobile = useMediaQuery({ maxWidth: Breakpoints.MOBILE });
  const topicPanel = isMobile ? (
    <div className={style.sidePanel}>
      <h2 className={style.sidePanelTitle}>Topics</h2>
      <TopicList topics={topics} selectedTopic={selectedTopic} />
      <div className={style.pipeDecoration} />
    </div>
  ) : (
    <TopicDropdown topics={topics} selectedTopic={selectedTopic} />
  );

  const getPostsByTopic = (topic: TopicData): PostMetaData[] => {
    postMetaData.sort((a, b) => b.date.getTime() - a.date.getTime());

    if (topic.title !== GlobalTopics.ALL)
      return postMetaData.filter((post) => post.topic === topic.title);
    else return postMetaData;
  };

  const shownPosts: PostMetaData[] = getPostsByTopic(selectedTopic);

  return (
    <div className={style.container}>
      {topicPanel}
      <div className={style.content}>
        {shownPosts.map((data: PostMetaData, key: number) => {
          return <PostOverview {...data} key={key} />;
        })}
      </div>
    </div>
  );
};

export default PostList;
