import style from './post.module.scss';
import { createElement } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { LoadedPost } from 'utils/importFiles';
import PostHeader from 'components/postHeader/postHeaderis';
import CodeBlock from 'components/codeBlock/CodeBlock';
import PostLink from 'components/postLink/PostLink';
import PostImage from 'components/postImage/postImageas';
import MetaTags from 'components/MetaTags';

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

const MyOl = (props: { children: string }) => (
  <p>
    <ol className={style.list} {...props} />
  </p>
);

const MyUl = (props: { children: string }) => (
  <p>
    <ul className={style.list} {...props} />
  </p>
);

const MyLi = (props: { children: string }) => (
  <li className={style.li} {...props} />
);

const styles = {
  p: MyParagraph,
  inlineCode: MyInlineCode,
  pre: MyPre,
  img: MyImage,
  a: MyLink,
  ol: MyOl,
  ul: MyUl,
  li: MyLi,
};

const Post: React.FC<LoadedPost> = ({ component, metadata }) => {
  return (
    <>
      <MetaTags
        data={{
          title: `${metadata.title} | Bx2 Blog`,
          description: metadata.excerpt,
        }}
      />
      <PostHeader {...metadata} />
      <MDXProvider components={styles}>
        <div className={style.content}>{createElement(component)}</div>
      </MDXProvider>
    </>
  );
};

export default Post;
