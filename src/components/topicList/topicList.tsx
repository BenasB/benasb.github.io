import classNames from 'classnames';
import style from './topicList.module.scss';
import { capitalize } from 'utils/stringManipulation';
import { Link, useParams } from 'react-router-dom';

export interface TopicData {
  title: string;
}

interface Props {
  topics: TopicData[];
}

const TopicList: React.FC<Props> = ({ topics }) => {
  const { topic } = useParams<{ topic: string }>();
  const selectedTopic: TopicData = topic ? { title: topic } : { title: 'all' };

  return (
    <>
      {topics.map((iterationTopic: TopicData, key: number) => {
        return (
          <Link
            to={`/blog/${iterationTopic.title}`}
            key={key}
            className={classNames(style.listItem, {
              [style.active]: iterationTopic.title === selectedTopic.title,
            })}
          >
            <h3 title={capitalize(iterationTopic.title)}>
              {capitalize(iterationTopic.title)}
            </h3>
          </Link>
        );
      })}
    </>
  );
};

export default TopicList;
