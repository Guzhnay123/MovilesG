import React, { useState } from "react";

const Hookerror5: React.FC = () => {
  const [count, setCount] = useState(0); // Error: Falta declarar el tipo de count y setCount

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
};
export default Hookerror5;
//Correction
//const [count, setCount] = useState<number>(0); // Error: Falta declarar el tipo de count y setCount