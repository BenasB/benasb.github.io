import style from './postList.module.scss';
import TopicList, { TopicData } from 'components/topicList/TopicList';
import PostOverview, {
  PostMetaData,
} from 'components/postOverview/PostOverview';
import GlobalTopics from 'enums/globalTopics';
import TopicDropdown from 'components/topicDropdown/TopicDropdown';
import MetaTags from 'components/MetaTags';
import { capitalize } from 'utils/stringManipulation';

interface Props {
  postMetaData: PostMetaData[];
  topics: TopicData[];
  selectedTopic: TopicData;
}

const PostList: React.FC<Props> = ({ postMetaData, topics, selectedTopic }) => {
  const getPostsByTopic = (topic: TopicData): PostMetaData[] => {
    postMetaData.sort((a, b) => b.date.getTime() - a.date.getTime());

    if (topic.title !== GlobalTopics.ALL)
      return postMetaData.filter((post) => post.topic === topic.title);
    else return postMetaData;
  };

  const shownPosts: PostMetaData[] = getPostsByTopic(selectedTopic);

  return (
    <>
      <MetaTags
        data={{
          title: `${capitalize(selectedTopic.title)} | Bx2 Blog`,
          description: `Bx2 blog posts in '${capitalize(
            selectedTopic.title
          )}' topic`,
        }}
      />
      <div className={style.container}>
        <>
          {/* Desktop */}
          <div className={style.sidePanel}>
            <h2 className={style.sidePanelTitle}>Topics</h2>
            <TopicList topics={topics} selectedTopic={selectedTopic} />
            <div className={style.pipeDecoration} />
          </div>
          {/* Mobile */}
          <div className={style.sidePanelMobile}>
            <TopicDropdown topics={topics} selectedTopic={selectedTopic} />
          </div>
        </>

        <div className={style.content}>
          {shownPosts.map((data: PostMetaData, key: number) => {
            return <PostOverview {...data} key={key} />;
          })}
        </div>
      </div>
    </>
  );
};

export default PostList;
