import style from './blogList.module.scss';
import TopicList from 'components/topicList/topicList';

const BlogList: React.FC = () => {
  return (
    <div className={style.container}>
      <div className={style.sidePanel}>
        <h2 className={style.sidePanelTitle}>Topics</h2>
        <TopicList />
        <div className={style.pipeDecoration} />
      </div>
      <div className={style.content}>
        <h2>Blogs</h2>
      </div>
    </div>
  );
};

export default BlogList;
