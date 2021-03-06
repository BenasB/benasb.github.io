import style from './post.module.scss';
import { createElement } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { LoadedPost } from 'utils/importFiles';
import PostHeader from 'components/postHeader/postHeader';
import CodeBlock from 'components/codeBlock/CodeBlock';
import PostLink from 'components/postLink/PostLink';
import PostImage from 'components/postImage/postImage';

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
  <PostImage {...props} />
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
