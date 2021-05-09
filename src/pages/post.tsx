import style from 'styles/post.module.scss';
import { createElement } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { LoadedPost } from 'utils/importFiles';
import PostHeader from 'components/postHeader/postHeader';

const MyParagraph = (props: { children: string }) => (
  <p className={style.p} {...props} />
);

const styles = {
  p: MyParagraph,
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
