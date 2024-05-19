import React, { useState } from 'react';

const calculateDartScore = (x: number, y: number): number => {
    const distance = Math.sqrt(x * x + y * y);
  
    if (distance > 10) {
      return 0;
    } else if (distance > 5) {
      return 1;
    } else if (distance > 1) {
      return 5;
    } else {
      return 10;
    }
  };
   const DartGame: React.FC = () => {
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);
  const [score, setScore] = useState<number | null>(null);

  const handleXChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setX(parseFloat(event.target.value));
  };

  const handleYChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setY(parseFloat(event.target.value));
  };

  const handleCalculate = () => {
    const points = calculateDartScore(x, y);
    setScore(points);
  };

  return (
    <div>
      <h1>Juego de Dardos</h1>
      <div>
        <label>
          Coordenada X:
          <input type="number" value={x} onChange={handleXChange} />
        </label>
      </div>
      <div>
        <label>
          Coordenada Y:
          <input type="number" value={y} onChange={handleYChange} />
        </label>
      </div>
      <button onClick={handleCalculate}>Calcular Puntos</button>
      {score !== null && <h2>Puntos obtenidos: {score}</h2>}
    </div>
  );
};

export default DartGame;
