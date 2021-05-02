import style from './mainLayout.module.scss';

const MainLayout: React.FC = ({ children }) => {
  return <div className={style.wrapper}>{children}</div>;
};

export default MainLayout;
