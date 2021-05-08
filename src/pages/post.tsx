interface Props {
  Mdx: React.ComponentType;
}

const Post: React.FC<Props> = ({ Mdx }) => {
  return <Mdx />;
};

export default Post;
