import { useState } from 'react';
import classNames from 'classnames';
import style from './topicList.module.scss';

const TopicList: React.FC = () => {
  const topics = ['Software', 'Hardware', 'Personal'];
  const [selectedTopic, setSelectedTopic] = useState(topics[0]);

  return (
    <>
      {topics.map((topic: string, key: number) => {
        return (
          <button
            key={key}
            onClick={() => setSelectedTopic(topic)}
            className={classNames(style.listItem, {
              [style.active]: topic === selectedTopic,
            })}
          >
            <h3 title={topic}>{topic}</h3>
          </button>
        );
      })}
    </>
  );
};

export default TopicList;
