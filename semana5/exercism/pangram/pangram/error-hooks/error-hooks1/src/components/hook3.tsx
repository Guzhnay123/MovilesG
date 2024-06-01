import React, { useEffect, useState } from "react";

const Hookerror3: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 0) {
      console.log("This is correct");
    }
  }, [count]);

  return <div onClick={() => setCount(count + 1)}>Count: {count}</div>;
};

export default Hookerror3;
