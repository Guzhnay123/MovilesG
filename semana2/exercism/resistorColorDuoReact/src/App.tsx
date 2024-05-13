import React, { useState } from 'react';

const NEW_COLOR_NAMES = [
  'negro',
  'rosa',
  'granate',
  'anaranjado',
  'limón',
  'esmeralda',
  'celeste',
  'lavanda',
  'grisáceo',
  'blanco',
];

const colorCode = (color: string): number => NEW_COLOR_NAMES.indexOf(color);

const App: React.FC = () => {
  const [input, setInput] = useState<string[]>(['', '']);
  const [result, setResult] = useState<number | null>(null);

  const handleChange = (index: number) => (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newInput = [...input];
    newInput[index] = e.target.value;
    setInput(newInput);
  };

  const handleSubmit = () => {
    const [tens, ones] = input;
    setResult(colorCode(tens) * 10 + colorCode(ones));
  };

  return (
    <div>
      <h1>Decodificador de Código de Color de Resistencia</h1>
      <select value={input[0]} onChange={handleChange(0)}>
        {NEW_COLOR_NAMES.map(color => (
          <option key={color} value={color}>{color}</option>
        ))}
      </select>
      <select value={input[1]} onChange={handleChange(1)}>
        {NEW_COLOR_NAMES.map(color => (
          <option key={color} value={color}>{color}</option>
        ))}
      </select>
      <button onClick={handleSubmit}>Decodificar</button>
      {result !== null && <p>Resistencia: {result}</p>}
    </div>
  );
};

export default App;
