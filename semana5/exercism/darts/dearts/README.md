

                                       DARTS

Imagina un juego donde lanzas dardos a un tablero virtual. El objetivo es saber cuántos
puntos ganas con cada lanzamiento, dependiendo de dónde caiga el dardo.

Componentes Principales:

1. Función de Cálculo de Puntuación (`calculateDartScore`):
   - Esta función calcula cuántos puntos ganas con cada lanzamiento, basándose en las coordenadas
   -  donde cae el dardo (`x` e `y`).
   - Usa matemáticas simples (el teorema de Pitágoras) para medir la distancia desde el centro del
   - tablero hasta donde cae el dardo.
   - Según esa distancia, decide cuántos puntos ganas. Por ejemplo, si cae cerca del centro, ganas más puntos;
   - si cae lejos, ganas menos.

2. Componente `DartGame`:
   - Es la parte que ves y con la que interactúas en la pantalla.
   - Te permite ingresar las coordenadas de tus lanzamientos.
   - Cuando ingresas las coordenadas y presionas "Calcular Puntos",
   - el programa usa la función `calculateDartScore` para saber cuántos puntos ganas.
   - Después de calcularlo, muestra tus puntos en la pantalla.

En resumen, este programa es como jugar dardos, pero en tu computadora. Te ayuda a calcular 
tus puntos y te muestra los resultados en tiempo real. Utiliza React para hacer todo esto de manera fácil y rápida.
Claro, desglosaré las partes principales del código:



1. **`import React, { useState } from 'react';`**: Esto importa la biblioteca de React y la función `useState` desde React. `useState` es un hook de React que permite añadir estado a los componentes de función.
   

3. **`const calculateDartScore = (x: number, y: number): number => { ... }`**: Esta es una función que calcula la puntuación del lanzamiento de dardos basada en las coordenadas `(x, y)` del lanzamiento. Retorna un número que representa la puntuación obtenida.

4. **`const DartGame: React.FC = () => { ... }`**: Este es el componente principal del juego de dardos. Es una función de React que renderiza la interfaz de usuario del juego. Utiliza el hook `useState` para manejar el estado de las coordenadas (`x` e `y`) y la puntuación (`score`) del lanzamiento.

5. **`const [x, setX] = useState<number>(0);`**: Esto inicializa el estado `x` con un valor de 0 y la función `setX` para actualizar este estado.

6. **`const handleXChange = (event: React.ChangeEvent<HTMLInputElement>) => { ... }`**: Esta función se llama cuando el valor del input de la coordenada X cambia. Actualiza el estado `x` con el nuevo valor ingresado por el usuario.

7. **`<input type="number" value={x} onChange={handleXChange} />`**: Este es un input donde el usuario puede ingresar la coordenada X del lanzamiento. El valor del input está ligado al estado `x`, y cuando cambia, se llama a la función `handleXChange`.

8. **`<button onClick={handleCalculate}>Calcular Puntos</button>`**: Este es un botón que el usuario puede hacer clic para calcular la puntuación del lanzamiento. Cuando se hace clic, se llama a la función `handleCalculate`.

9. **`{score !== null && <h2>Puntos obtenidos: {score}</h2>}`**: Esto muestra la puntuación obtenida solo si `score` no es `null`. Si `score` es `null`, esta parte no se renderizará en la interfaz.


