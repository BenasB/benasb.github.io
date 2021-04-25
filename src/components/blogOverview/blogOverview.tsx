import style from './blogOverview.module.scss';

export interface BlogMetaData {
  headline: string;
  date: string;
  excerpt: string;
}

const BlogOverview: React.FC<BlogMetaData> = ({ headline, date, excerpt }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <h2>{headline}</h2>
        <h3 className={style.date}>{date}</h3>
        <h3 className={style.excerpt}>{excerpt}</h3>
      </div>
    </div>
  );
};

export default BlogOverview;
