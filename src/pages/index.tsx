import BlogList from 'components/blogList/blogList';
import { BlogMetaData } from 'components/blogOverview/blogOverview';

interface Props {
  loadedPostMetaData: BlogMetaData[];
}

const Blog: React.FC<Props> = ({ loadedPostMetaData }) => {
  return (
    <>
      <BlogList loadedPostMetaData={loadedPostMetaData} />
    </>
  );
};

export default Blog;
