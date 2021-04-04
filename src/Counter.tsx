import React, { useState } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>CLICK ME</button>

      <h2>{count}</h2>
    </div>
  );
};

export default Counter;
