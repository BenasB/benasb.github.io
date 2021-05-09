import { useState } from 'react';
import style from './topicDropdown.module.scss';
import { TopicData } from 'components/topicList/topicList';
import { capitalize } from 'utils/stringManipulation';
import arrow from 'assets/images/vector/down-arrow.svg';
import { Link } from 'react-router-dom';
import GlobalTopics from 'enums/globalTopics';
import classNames from 'classnames';

interface Props {
  topics: TopicData[];
  selectedTopic: TopicData;
}

const TopicDropdown: React.FC<Props> = ({ topics, selectedTopic }) => {
  const [dropdownOpen, setdropdownOpen] = useState<boolean>(false);

  const choosableTopics: TopicData[] = topics.filter(
    (topic) => topic.title !== selectedTopic.title
  );

  return (
    <div className={style.container}>
      <button
        onClick={() => setdropdownOpen(!dropdownOpen)}
        className={style.button}
      >
        <h3>
          <b>{capitalize(selectedTopic.title)}</b>
        </h3>
        <img
          src={arrow}
          alt="Arrow pointing downwards"
          width={15}
          height={15}
          className={classNames(
            { [style.rotate180]: dropdownOpen },
            { [style.rotate0]: !dropdownOpen }
          )}
        />
      </button>

      {dropdownOpen && (
        <div className={style.links}>
          {choosableTopics.map((topic, key) => {
            return (
              <Link
                className={style.link}
                to={
                  topic.title === GlobalTopics.ALL
                    ? '/blog'
                    : `/blog/${topic.title}`
                }
                onClick={() => setdropdownOpen(false)}
                key={key}
              >
                <h3>{capitalize(topic.title)}</h3>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TopicDropdown;
