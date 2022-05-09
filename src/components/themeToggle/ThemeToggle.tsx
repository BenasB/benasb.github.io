import { ThemeContext } from "components/ThemeProvider";
import { useContext } from "react";
import style from './themeToggle.module.scss';

import moon from 'assets/images/vector/moon.svg';
import sun from 'assets/images/vector/sun.svg';

const ThemeToggle:React.FC = () => {
    const {theme, setTheme} = useContext(ThemeContext);

    return (
      <button 
        className={style.button}
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
          <img src={theme === 'light' ? sun : moon} className={style.image}/>
      </button>
    );
  }

export default ThemeToggle;