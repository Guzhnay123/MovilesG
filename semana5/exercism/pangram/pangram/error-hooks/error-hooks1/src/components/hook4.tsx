import React, { useState } from "react";

const Hookerror4: React.FC = () => {
  const [count, setCount] = useState<number>(0);
//   const [count, setCount] = useState<number>();
  return (
    <div onClick={() => setCount((prev) => (prev || 0) + 1)}>
      Count: {count}
    </div>
  );
};

export default Hookerror4;