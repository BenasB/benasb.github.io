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
  return (
    <div className={style.container}>
      <div className={style.sidePanel}>
        <h2 className={style.sidePanelTitle}>Topics</h2>
        <TopicList topics={topics} />
        <div className={style.pipeDecoration} />
      </div>
      <div className={style.content}>
        {postMetaData.map((data: PostMetaData, key: number) => {
          return <PostOverview {...data} key={key} />;
        })}
      </div>
    </div>
  );
};

export default PostList;
