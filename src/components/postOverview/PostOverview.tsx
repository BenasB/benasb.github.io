import { Link } from 'react-router-dom';
import style from './postOverview.module.scss';

export interface PostMetaData {
  title: string;
  date: Date;
  excerpt: string;
  path: string;
  topic: string;
  fileName: string;
}

const PostOverview: React.FC<PostMetaData> = ({
  title,
  date,
  excerpt,
  path,
}) => {
  return (
    <Link to={`/${path}`} className={style.link}>
      <div className={style.container}>
        <h2>{title}</h2>
        <h3 className={style.date}>{date.toISOString().split('T')[0]}</h3>
        <h3 className={style.excerpt}>{excerpt}</h3>
      </div>
    </Link>
  );
};

export default PostOverview;
