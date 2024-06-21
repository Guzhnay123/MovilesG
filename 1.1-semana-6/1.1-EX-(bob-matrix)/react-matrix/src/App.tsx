import React, { useState } from "react";

const Bob: React.FC = () => {
  const [response, setResponse] = useState<string>("");

  const handleInput = (input: string) => {
    const trimmedInput = input.trim();
    setResponse(
      !trimmedInput
        ? "¡Bien ser de esa manera!"
        : trimmedInput === trimmedInput.toUpperCase() && trimmedInput.endsWith("?")
        ? "¡Cálmate, sé lo que estoy haciendo!"
        : trimmedInput === trimmedInput.toUpperCase()
        ? "¡Vaya, relájate!"
        : trimmedInput.endsWith("?")
        ? "Seguro."
        : "Lo que sea."
    );
  };

  return (
    <div>
      <h1>Bob el adolescente</h1>
      <input
        type="text"
        placeholder="Escribe algo a Bob..."
        onChange={(e) => handleInput(e.target.value)}
      />
      <p>{response}</p>
    </div>
  );
};

export default Bob;







