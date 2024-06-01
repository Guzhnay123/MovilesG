import React, { useEffect, useState } from "react";

const Hookerror2: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Tick");
      setCount((prevCount) => prevCount + 1); // Incrementa el contador cada segundo
    }, 1000);

    return () => clearInterval(timer); // Limpia el intervalo cuando el componente se desmonta
  }, [count]);

  return <div>Count: {count}</div>;
};

export default Hookerror2;
