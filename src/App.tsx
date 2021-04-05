import './styles.css';
import image from './react.svg';
import Counter from './Counter';

export const App: React.FC = () => {
  return (
    <>
      <h1>Hello World! - {process.env.NODE_ENV}</h1>
      <img src={image} alt={'React logo'} width={300} />
      <Counter />
    </>
  );
};
