import style from './meTextSection.module.scss';

interface Props {
  title: string;
}

const MeTextSection: React.FC<Props> = ({ title, children }) => {
  return (
    <>
      <h2 className={style.title}>{title}</h2>
      <div className={style.text}>{children}</div>
    </>
  );
};

export default MeTextSection;
