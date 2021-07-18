import MetaTags from 'components/MetaTags';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <MetaTags data={{ title: '404' }} />

      <h1>404 Error, sorry!</h1>
    </>
  );
};

export default NotFoundPage;