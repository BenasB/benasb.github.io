import { createElement } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { LoadedPost } from 'utils/importFiles';
import PostHeader from 'components/postHeader/postHeader';

const MyParagraph = (props: { children: string }) => (
  <p style={{ textAlign: 'justify' }} {...props} />
);

const styles = {
  p: MyParagraph,
};

const Post: React.FC<LoadedPost> = ({ component, metadata }) => {
  return (
    <>
      <PostHeader {...metadata} />
      <MDXProvider components={styles}>{createElement(component)}</MDXProvider>
    </>
  );
};

export default Post;
