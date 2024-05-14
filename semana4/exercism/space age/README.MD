    SPACE AGE

-Este componente de React permite calcular la edad de un usuario en años terrestres ajustada según el período orbital de diferentes cuerpos celestes.

-Desarrollo

Importar desde la librería 'react'. useState.

-Defino planetOrbitalPeriodsCustom, un objeto que contiene los períodos orbitales de los planetas en relación con la Tierra.

-secondsInEarthYearCustom representa la duración de un año terrestre en segundos.

Definimos un componente funcional llamado AgeCalculator.

**Utilizamos el gancho useState para definir dos estados: userAgeInSeconds, que almacena la edad del usuario en segundos, y selectedCelestialBody, que almacena el nombre del cuerpo celeste seleccionado.

calculateUserAge: Calcula la edad del usuario en años terrestres, ajustada según el cuerpo celeste seleccionado.

handleUserAgeChange y handleCelestialBodyChange: Son funciones de manejo de eventos que actualizan los estados userAgeInSeconds y selectedCelestialBody, respectivamente, en respuesta a cambios en los elementos de entrada y selección.

Se retorna el JSX que representa la interfaz de usuario del componente.

Incluye un título, etiquetas de entrada y selección, y un párrafo que muestra la edad del usuario ajustada según el cuerpo celeste seleccionado.

**Exportamos el componente AgeCalculator para que pueda ser utilizado en otras partes de la aplicación.