import { Link } from 'react-router-dom';
import style from './header.module.scss';
import logo from 'assets/images/vector/logo.svg';

const Header = () => {
  return (
    <header className={style.container}>
      <div className={style.content}>
        <img src={logo} alt="logo" />
        <nav className={style.navigation}>
          <Link to="/blog">Blog</Link>
          <Link to="/me">Me</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
