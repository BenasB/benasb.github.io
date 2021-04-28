import { useState } from 'react';
import classNames from 'classnames';
import style from './topicList.module.scss';

export interface TopicData {
  title: string;
}

interface Props {
  topics: TopicData[];
}

const TopicList: React.FC<Props> = ({ topics }) => {
  const [selectedTopic, setSelectedTopic] = useState(topics[0]);

  return (
    <>
      {topics.map((topic: TopicData, key: number) => {
        return (
          <button
            key={key}
            onClick={() => setSelectedTopic(topic)}
            className={classNames(style.listItem, {
              [style.active]: topic === selectedTopic,
            })}
          >
            <h3 title={topic.title}>{topic.title}</h3>
          </button>
        );
      })}
    </>
  );
};

export default TopicList;
