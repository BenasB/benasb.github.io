import { ThemeContext } from 'components/ThemeProvider';
import { useContext } from 'react';
import style from './themeToggle.module.scss';

import moon from 'assets/images/vector/moon.svg';
import sun from 'assets/images/vector/sun.svg';

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      className={style.button}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {theme === 'light' ? (
        <img src={sun} className={style.image} alt={'Sun theme toggle'} />
      ) : (
        <img src={moon} className={style.image} alt={'Moon theme toggle'} />
      )}
    </button>
  );
};

export default ThemeToggle;
