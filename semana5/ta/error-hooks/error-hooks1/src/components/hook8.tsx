import React, { useEffect, useState } from "react";

const Example8: React.FC = () => {
  const [count, setCount] = useState(0);
  const [doubleCount] = useState(0);

  useEffect(() => {}, []);

  return (
    <div onClick={() => setCount(count + 1)}>Double Count: {doubleCount}</div>
  );
};

export default Example8;
