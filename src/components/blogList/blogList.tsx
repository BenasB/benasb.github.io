import style from './blogList.module.scss';
import TopicList from 'components/topicList/topicList';
import BlogOverview, {
  BlogMetaData,
} from 'components/blogOverview/blogOverview';

const BlogList: React.FC = () => {
  const TestBlogData: BlogMetaData = {
    headline: 'Test Headline',
    date: '2021-04-24',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
  };

  const blogMetaDataArray: BlogMetaData[] = [];
  for (let index = 0; index < 20; index++) {
    blogMetaDataArray.push(TestBlogData);
  }

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
