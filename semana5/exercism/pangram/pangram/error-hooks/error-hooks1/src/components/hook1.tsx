import React, { useEffect, useState } from "react";

const Hookerror1: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("mount");
  }, [count]); // Se agrega la dependencia count para que useEffect se ejecute solo cuando count cambie

// useEffect(() => {
//     console.log("This runs render");
//   });
  return <div onClick={() => setCount(count + 1)}>Count: {count}</div>;
};

export default Hookerror1;
