import React from 'react';
import style from './postSectionHeader.module.scss';
import icon from 'assets/images/vector/link.svg';
import slugifier from 'utils/slugifier';

interface Props {
  text: string;
  top: number;
}

const PostSectionHeader: React.FC<Props> = ({ text, top, children }) => {
  return (
    <div className={style.container}>
      <a href={`#${slugifier(text)}`} className={style.link}>
        <img
          src={icon}
          alt={`Go to ${slugifier(text)}`}
          className={style.icon}
          style={{ top: top }}
        />
        {children}
      </a>
    </div>
  );
};

export default PostSectionHeader;
