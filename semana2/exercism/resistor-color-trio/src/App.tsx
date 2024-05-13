import React, { useState } from 'react';

const COLORS = [
  'indigo',
  'turquesa',
  'magenta',
  'amarillo',
  'verde lima',
  'rojo oscuro',
  'azul cielo',
  'lila',
  'gris claro',
  'blanco',
];

const colorCode = (color: string): number => COLORS.indexOf(color);

const App: React.FC = () => {
  const [input, setInput] = useState<string[]>(['', '', '']);
  const [result, setResult] = useState<string | null>(null);

  const handleChange = (index: number) => (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newInput = [...input];
    newInput[index] = e.target.value;
    setInput(newInput);
  };

  const handleSubmit = () => {
    const [first, second, third] = input;
    const mainValue = colorCode(first) * 10 + colorCode(second);
    const zeros = 10 ** colorCode(third);

    let label =  `${mainValue}`;
    if (zeros >= 1000) {
      label = `${mainValue / 1000} kiloohms`;
    } else {
      label = `${mainValue} ohms`;
    }

    setResult(label);
  };

  return (
    <div>
      <h1>Decodificador de Código de Colores para Resistencias - Trío</h1>
      <select value={input[0]} onChange={handleChange(0)}>
        {COLORS.map(color => (
          <option key={color} value={color}>{color}</option>
        ))}
      </select>
      <select value={input[1]} onChange={handleChange(1)}>
        {COLORS.map(color => (
          <option key={color} value={color}>{color}</option>
        ))}
      </select>
      <select value={input[2]} onChange={handleChange(2)}>
        {COLORS.map(color => (
          <option key={color} value={color}>{color}</option>
        ))}
      </select>
      <button onClick={handleSubmit}>Decodificar</button>
      {result !== null && <p>Resistencia: {result}</p>}
    </div>
  );
};

export default App;
