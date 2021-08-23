import style from './post.module.scss';
import { createElement } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { LoadedPost } from 'utils/importFiles';
import PostHeader from 'components/postHeader/PostHeader';
import CodeBlock from 'components/codeBlock/CodeBlock';
import PostLink from 'components/postContentComponents/postLink/PostLink';
import PostImage from 'components/postContentComponents/postImage/PostImage';
import MetaTags from 'components/MetaTags';
import PostSectionHeader from 'components/postContentComponents/postSectionHeader/PostSectionHeader';
import slugifier from 'utils/slugifier';

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

const MyH2 = (props: { children: string }) => (
  <PostSectionHeader text={props.children} top={10}>
    <h2 id={slugifier(props.children)}>{props.children}</h2>
  </PostSectionHeader>
);

const MyH3 = (props: { children: string }) => {
  console.log(props.children);
  return (
    <PostSectionHeader text={props.children} top={2}>
      <h3 id={slugifier(props.children)}>{props.children}</h3>
    </PostSectionHeader>
  );
};

const styles = {
  p: MyParagraph,
  inlineCode: MyInlineCode,
  pre: MyPre,
  img: MyImage,
  a: MyLink,
  ol: MyOl,
  ul: MyUl,
  li: MyLi,
  h2: MyH2,
  h3: MyH3,
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
