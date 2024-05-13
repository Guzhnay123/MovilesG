
1)Importaciones de React y useState: El código importa la biblioteca React y la función useState desde 'react'. useState es un gancho (hook) de React que permite al componente tener estado.

2)Definición del componente LeapYear: El componente LeapYear es una función de React que devuelve JSX (JavaScript XML), es decir, elementos de interfaz de usuario. Este componente utiliza el tipo React.FC para especificar que es un componente de función.

3)Estado del componente: El componente utiliza dos estados mediante el uso de useState:

4)inputYear: Almacena el valor del año ingresado por el usuario.
isLeap: Almacena el resultado de si el año ingresado es un año bisiesto o no. Inicialmente se establece en null.
Manejadores de eventos:

5)handleInputChange: Este manejador se llama cuando el usuario cambia el valor del input donde se ingresa el año. Actualiza el estado inputYear con el valor del input.

6)handleCheckLeapYear: Este manejador se llama cuando el usuario hace clic en el botón "Check" para verificar si el año ingresado es un año bisiesto. Convierte el año ingresado a un número entero y luego llama a la función isLeapYear para determinar si es un año bisiesto.
Función isLeapYear: Esta función toma un año como argumento y devuelve true si es un año bisiesto y false si no lo es, siguiendo las reglas estándar de los años bisiestos.










