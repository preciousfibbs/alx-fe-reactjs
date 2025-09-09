import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // initialize state with 0

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Simple Counter</h2>
      <p style={{ fontSize: '20px' }}>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)} style={{ margin: '5px' }}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)} style={{ margin: '5px' }}>
        Decrement
      </button>
      <button onClick={() => setCount(0)} style={{ margin: '5px' }}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
