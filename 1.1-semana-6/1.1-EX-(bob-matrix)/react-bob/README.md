                            Matrix
                            
convierte una cadena de texto en una matriz y muestra tanto las filas como las columnas de la matriz.

Componentes Utilizados:

useState: Hook de React utilizado para manejar el estado de la aplicación.
matrixString: Guarda la cadena de texto que representa la matriz.
matrixResult: Guarda el resultado de la conversión de la cadena en una matriz de filas y columnas.
Return:

El componente App renderiza la interfaz de usuario:

Un título "Matrix Parser".
Un área de texto donde el usuario puede ingresar la matriz en formato de cadena.
Un botón "Parse Matrix" que llama a la función handleParseMatrix para procesar la cadena.
Si matrixResult no es nulo, muestra las filas y columnas de la matriz resultante.
Cuando se hace clic en "Parse Matrix", la función handleParseMatrix convierte la cadena en una matriz de filas y columnas utilizando métodos de cadena y de matriz. Luego, actualiza el estado matrixResult con el resultado de la conversión.
