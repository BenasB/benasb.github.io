import classNames from 'classnames';
import style from './topicList.module.scss';
import { capitalize } from 'utils/stringManipulation';
import { Link } from 'react-router-dom';
import GlobalTopics from 'enums/globalTopics';

export interface TopicData {
  title: string;
}

interface Props {
  topics: TopicData[];
  selectedTopic: TopicData;
}

const TopicList: React.FC<Props> = ({ topics, selectedTopic }) => {
  return (
    <>
      {topics.map((topic: TopicData, key: number) => {
        return (
          <Link
            to={
              topic.title === GlobalTopics.ALL
                ? '/blog'
                : `/blog/${topic.title}`
            }
            key={key}
            className={classNames(style.listItem, {
              [style.active]: topic.title === selectedTopic.title,
            })}
          >
            <h3 title={capitalize(topic.title)}>{capitalize(topic.title)}</h3>
          </Link>
        );
      })}
    </>
  );
};

export default TopicList;
