import style from './meTextSection.module.scss';

interface Props {
  title: string;
  text: string[];
}

const MeTextSection: React.FC<Props> = ({ title, text }) => {
  return (
    <>
      <h2 className={style.title}>{title}</h2>
      {text.map((t, key) => {
        return (
          <p className={style.text} key={key}>
            {t}
          </p>
        );
      })}
    </>
  );
};

export default MeTextSection;
