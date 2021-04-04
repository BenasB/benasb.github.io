import './styles.css';
import image from './react.svg';
import Counter from './Counter';

export const App: React.FC = () => {
  const name = 'Benas Test';
  return (
    <>
      <h1>
        Hello World! - {process.env.NODE_ENV} - Name: {name}
      </h1>
      <img src={image} alt={'React logo'} width={300} />
      <Counter />
    </>
  );
};
