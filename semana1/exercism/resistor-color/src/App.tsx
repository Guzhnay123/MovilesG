import React from 'react';

const coloresResistores: string[] = [
  'Negro', 'Marrón', 'Rojo', 'Naranja', 'Amarillo',
  'Verde', 'Azul', 'Violeta', 'Gris', 'Blanco'
];

const Componente: React.FC = () => (
  <div>
    <h1>Resistores</h1>
    <ul>
      {coloresResistores.map((color, index) => (
        <li key={index}>{color}</li>
      ))}
    </ul>
  </div>
);

export default Componente;
