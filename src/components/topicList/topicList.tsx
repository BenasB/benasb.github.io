import { useState } from 'react';
import classNames from 'classnames';
import style from './topicList.module.scss';
import { capitalize } from 'utils/stringManipulation';

export interface TopicData {
  title: string;
}

interface Props {
  topics: TopicData[];
  onTopicChange: (newTopic: TopicData) => void;
}

const TopicList: React.FC<Props> = ({ topics, onTopicChange }) => {
  const [selectedTopic, setSelectedTopic] = useState(topics[0]);

  return (
    <>
      {topics.map((topic: TopicData, key: number) => {
        return (
          <button
            key={key}
            onClick={() => {
              setSelectedTopic(topic);
              onTopicChange(topic);
            }}
            className={classNames(style.listItem, {
              [style.active]: topic === selectedTopic,
            })}
          >
            <h3 title={capitalize(topic.title)}>{capitalize(topic.title)}</h3>
          </button>
        );
      })}
    </>
  );
};

export default TopicList;
