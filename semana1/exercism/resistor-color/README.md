Importación de React:

javascript

import React from 'react';
Aquí se importa la librería de React para poder utilizarla en el archivo.

Definición del array de colores de resistores:

javascript
const coloresResistores: string[] = [
  'Negro', 'Marrón', 'Rojo', 'Naranja', 'Amarillo',
  'Verde', 'Azul', 'Violeta', 'Gris', 'Blanco'
];
Se define un array llamado coloresResistores que contiene una lista de colores representados como cadenas de texto. Este array se utilizará para renderizar los elementos de la lista en el componente.

Definición del componente:

javascript

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
Se define un componente funcional llamado Componente. Este componente renderiza un título <h1> que dice "Resistores" y una lista <ul> de elementos <li> que contienen los colores de resistores. Utiliza el método map para iterar sobre el array coloresResistores y generar un elemento <li> para cada color. Se utiliza la propiedad key para asignar una clave única a cada elemento de la lista, en este caso, se utiliza el índice del array.

Exportación del componente:

javascript
export default Componente;
Se exporta el componente Componente para que pueda ser utilizado en otros archivos de React.

Este código muestra cómo definir un componente simple en React que renderiza una lista de elementos a partir de un array de datos.






