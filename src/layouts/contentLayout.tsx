import style from './contentLayout.module.scss';

const ContentLayout: React.FC = ({ children }) => {
  return <div className={style.wrapper}>{children}</div>;
};

export default ContentLayout;
