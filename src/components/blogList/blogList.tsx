import style from './blogList.module.scss';
import TopicList from 'components/topicList/topicList';
import BlogOverview, {
  BlogMetaData,
} from 'components/blogOverview/blogOverview';

interface Props {
  loadedPostMetaData: BlogMetaData[];
}

const BlogList: React.FC<Props> = ({ loadedPostMetaData }) => {
  const blogMetaDataArray: BlogMetaData[] = loadedPostMetaData;

  return (
    <div className={style.container}>
      <div className={style.sidePanel}>
        <h2 className={style.sidePanelTitle}>Topics</h2>
        <TopicList />
        <div className={style.pipeDecoration} />
      </div>
      <div className={style.content}>
        {blogMetaDataArray.map((data: BlogMetaData, key: number) => {
          return <BlogOverview {...data} key={key} />;
        })}
      </div>
    </div>
  );
};

export default BlogList;
