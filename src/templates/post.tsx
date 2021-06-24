import style from './post.module.scss';
import { createElement } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { LoadedPost } from 'utils/importFiles';
import PostHeader from 'components/postHeader/postHeader';
import CodeBlock from 'components/codeBlock/CodeBlock';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import PostLink from 'components/postLink/PostLink';

const MyParagraph = (props: { children: string }) => (
  <p className={style.p} {...props} />
);

const MyInlineCode = (props: { children: string }) => (
  <code className={style.code} {...props} />
);

const MyPre = (props: {
  children: { props: { children: string; className: string } };
}) => <CodeBlock {...props.children.props} />;

const MyImage = (props: { alt: string; src: string }) => (
  <LazyLoadImage {...props} effect="blur" width="100%" />
);

const MyLink = (props: { children: string; href: string }) => (
  <PostLink className={style.link} {...props} />
);

const styles = {
  p: MyParagraph,
  inlineCode: MyInlineCode,
  pre: MyPre,
  img: MyImage,
  a: MyLink,
};

const Post: React.FC<LoadedPost> = ({ component, metadata }) => {
  return (
    <>
      <PostHeader {...metadata} />
      <MDXProvider components={styles}>
        <div className={style.content}>{createElement(component)}</div>
      </MDXProvider>
    </>
  );
};

export default Post;
