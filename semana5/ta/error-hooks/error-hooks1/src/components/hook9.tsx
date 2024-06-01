import React, { useState } from "react";

const Example9: React.FC = () => {
  const [count, setCount] = useState(0);

  const derivedCount = count + 1;

  return (
    <div>
      <div onClick={() => setCount(count + 1)}>Count: {count}</div>
      <div>Derived Count: {derivedCount}</div>
    </div>
  );
};

export default Example9;
