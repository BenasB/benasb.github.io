import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface Props {
  src: string; // If internal, relative to 'assets/images/'
  alt: string;
}

const PostImage: React.FC<Props> = ({ src, alt }) => {
  const [imageSrc, setImageSrc] = useState<string | undefined>(undefined);

  const isURL = (str: string) => {
    const expression = new RegExp(
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
    );

    return expression.test(str);
  };

  if (imageSrc === undefined) {
    if (isURL(src)) {
      setImageSrc(src);
    } else {
      import(`assets/images/${src}`).then((s) => {
        setImageSrc(s.default);
      });
    }
  }

  return <LazyLoadImage src={imageSrc} alt={alt} effect="blur" width="100%" />;
};

export default PostImage;
