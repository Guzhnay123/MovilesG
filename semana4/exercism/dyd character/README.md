                D&D Character Generator

Este es un generador de personajes para el juego de rol Dungeons & Dragons (D&D) desarrollado en React.

Funcionalidades

  Genera un nuevo personaje de D&D aleatorio con estadísticas de habilidad y puntos de golpe.
  
  Muestra las características generadas del personaje en una lista.

Desarrollo

importamos React y la función useState desde la librería 'react'.

throwDice es una función que genera un número aleatorio entre 1 y 6, simulando un lanzamiento de dado.

-generateAbilityScore genera un puntaje de habilidad para un personaje en función de lanzamientos de dados.
-Lanza cuatro dados y toma los tres mayores, sumándolos para obtener el puntaje.

calculateConstitutionModifier calcula el modificador de constitución de un personaje en función de su puntuación de constitución.

calculateHitPoints calcula los puntos de golpe de un personaje basándose en su modificador de constitución.

generateCharacter crea un objeto que representa un personaje completo de D&D.

Genera puntajes de habilidad para cada una de las características principales.

Calcula el modificador de constitución y los puntos de golpe del personaje.

CharacterGenerator es un componente de React que muestra un botón para generar un nuevo personaje.

Cuando se hace clic en el botón, se llama a generateNewCharacter para crear un nuevo personaje y actualizar el estado.

Muestra la información del personaje generado, incluyendo todas sus características y puntos de golpe.

Se exporta el componente CharacterGenerator para que pueda ser utilizado en otras partes de la aplicación.

