import React from 'react';
import image from '../react.svg';
import { Link } from 'react-router-dom';

const Foo: React.FC = () => {
  return (
    <>
      <h1>This is the foo page</h1>
      <h1>Hello World! - {process.env.NODE_ENV}</h1>
      <img src={image} alt={'React logo'} width={300} />
      <Link to="/bar">To Bar page</Link>
    </>
  );
};

export default Foo;
