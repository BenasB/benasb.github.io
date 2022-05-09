import { Link } from 'react-router-dom';
import style from './header.module.scss';
import logo from 'assets/images/vector/logo.svg';
import ThemeToggle from 'components/themeToggle/ThemeToggle';

const Header = () => {
  return (
    <header className={style.container}>
      <div className={style.content}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <nav className={style.navigation}>
          <Link to="/">Blog</Link>
          <Link to="/me">Me</Link>
          <ThemeToggle/>
        </nav>
      </div>
    </header>
  );
};

export default Header;
