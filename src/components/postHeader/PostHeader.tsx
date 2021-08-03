import style from './postHeader.module.scss';
import { PostMetaData } from 'components/postOverview/PostOverview';
import { capitalize } from 'utils/stringManipulation';
import arrow from 'assets/images/vector/left-arrow.svg';
import { Link } from 'react-router-dom';

const PostHeader: React.FC<PostMetaData> = (metadata) => {
  return (
    <div className={style.header}>
      <div className={style.topRow}>
        <Link to={`/${metadata.topic}`} className={style.topic}>
          <img src={arrow} alt={'left arrow'} width={15} height={15} />
          <h3>{capitalize(metadata.topic)}</h3>
        </Link>
        <h3 className={style.date}>
          {metadata.date.toISOString().split('T')[0]}
        </h3>
      </div>
      <h1>{metadata.title}</h1>
    </div>
  );
};

export default PostHeader;
