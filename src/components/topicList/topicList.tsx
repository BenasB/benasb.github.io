import style from './topicList.module.scss';

const TopicList: React.FC = () => {
  const topics = ['Software', 'Hardware', 'Personal'];

  return (
    <ul>
      {topics.map((topic: string, key: number) => {
        return (
          <li key={key} className={style.listItem}>
            <h3>{topic}</h3>
          </li>
        );
      })}
    </ul>
  );
};

export default TopicList;
