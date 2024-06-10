                             Pangram:


Verifica si una Oración Tiene Todas las Letras Pangram es una herramienta
que revisa si una oración tiene todas las letras del abecedario inglés.
¿Qué es un pangrama? Una oración que contiene todas las letras del alfabeto 
al menos una vez.

Componentes Clave:

Función isPangram:

Examina una oración para ver si tiene todas las letras del abecedario inglés.
Usando un proceso simple, 
revisa si cada letra del alfabeto está presente en la oración.
Si falta alguna letra, la función indica que no es un pangrama;
si están todas, confirma que sí lo es.


Componente PangramChecker:

Es la parte del programa que ves y con la que interactúas.
Guarda la oración que escribes y muestra el resultado de la verificación.
Te ofrece un espacio para ingresar la oración que deseas revisar.
Al hacer clic en "Verificar", 
usa la función isPangram para determinar si es un pangrama o no.
Después de la revisión, muestra si la oración es un pangrama o no.
En Resumen:
Pangram te ayuda a comprobar si una oración contiene todas las letras del alfabeto inglés. 
Con una interfaz sencilla creada en React, solo necesitas ingresar la oración 
para saber rápidamente si es un pangrama o no.
import React, { useState } from 'react';

const isPangram = (sentence: string): boolean => {
  // Se define el alfabeto en inglés.
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  // Se convierte la oración a minúsculas para evitar 
  problemas con mayúsculas.
  const lowercasedSentence = sentence.toLowerCase();

  // Se recorre el alfabeto y se verifica si cada letra 
  está presente en la oración.
  for (let char of alphabet) {
    if (!lowercasedSentence.includes(char)) {
      return false;
    }
  }
  // Si se recorrió todo el alfabeto sin problemas, significa que es un pangrama.
  return true;
};

const PangramChecker: React.FC = () => {
  // Estado para guardar la oración ingresada por el usuario.
  const [sentence, setSentence] = useState<string>('');
  // Estado para guardar el resultado de la verificación.
  const [isPangramResult, setIsPangramResult] = useState<boolean | null>(null);

  // Función para manejar el cambio en el input de la oración.
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSentence(event.target.value);
  };

  // Función para verificar si la oración es un pangrama.
  const handleCheck = () => {
    const result = isPangram(sentence);
    setIsPangramResult(result);
  };

  return (
    <div>
      {/* Interfaz de usuario: input, botón y mensaje de resultado */}
    </div>
  );
};

export default PangramChecker;



