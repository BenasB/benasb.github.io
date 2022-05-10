import style from './meHeader.module.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

import image from 'assets/images/raster/me.png';
import email from 'assets/images/vector/email.svg';
import twitter from 'assets/images/vector/twitter.svg';
import linkedin from 'assets/images/vector/linkedin.svg';
import github from 'assets/images/vector/github.svg';

interface Social {
  link: string;
  src: string;
  alt: string;
}

const MeHeader: React.FC = () => {
  const socials: Social[] = [
    {
      link: 'mailto:bud.benas@gmail.com',
      src: email,
      alt: 'Email Benas Budrys',
    },
    {
      link: 'https://twitter.com/benasbud',
      src: twitter,
      alt: 'Go to Benas Budrys twitter',
    },
    {
      link: 'https://linkedin.com/in/benas-budrys',
      src: linkedin,
      alt: 'Go to Benas Budrys LinkedIn',
    },
    {
      link: 'https://github.com/BenasB',
      src: github,
      alt: 'Go to Benas Budrys Github',
    },
  ];
  
  return (
    <div className={style.container}>
      <LazyLoadImage
        className={style.image}
        src={image}
        alt="Benas Budrys"
        width={220}
        height={220}
        effect="opacity"
      />
      <div className={style.info}>
        <h1>Benas Budrys</h1>
        <div className={style.socials}>
          {socials.map((social, key) => {
            return (
              <a
                href={social.link}
                key={key}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={social.src} alt={social.alt} width={50} height={50} />
              </a>
            );
          })}
        </div>
        <h3>Location: Lithuania</h3>
      </div>
    </div>
  );
};

export default MeHeader;
