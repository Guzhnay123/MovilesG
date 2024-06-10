                                                 10 errores  en React con los Hooks.

ERROR 1: Olvidar decirle a useEffect cuándo debe ejecutarse
¿Qué pasa?: Se te olvida decirle a useEffect cuándo debe ejecutarse, así que se activa en cada vuelta del componente, incluso si nada ha cambiado.
Imagina que quieres imprimir un mensaje solo cuando cambia una cuenta. Sin el array de dependencias, esa impresión sucederá todo el tiempo, sin importar si la cuenta cambió o no.
Solución: Dile a useEffect qué debe estar pendiente. Si quieres que se ejecute solo cuando la cuenta cambie, incluye la cuenta en un array como este: [count].

ERROR 2: Dejar efectos desordenados
¿Qué pasa?: A veces, nos olvidamos de limpiar después de nosotros mismos, y eso puede dejar cosas raras en nuestra memoria.
Imagina que empiezas un temporizador usando setInterval. Si no lo limpias cuando el componente se va, seguirá corriendo incluso después de que el componente desaparezca.
Solución: Devuelve una función desde useEffect para limpiar tus efectos. Así, cuando tu componente se vaya, puede hacer una limpieza rápida.

ERROR 3: Usar Hooks dentro de condicionales
¿Qué pasa?: Colocar hooks dentro de condicionales puede causar problemas. React necesita que los hooks se usen de cierta manera para que todo funcione como se espera.
Imagina que pones un hook dentro de un if. Esto puede llevar a actualizaciones de estado locas y dificultar la comprensión del código.
Solución: Pon siempre los hooks fuera de los condicionales. Así, React puede seguir las reglas y todo funcionará sin problemas.

ERROR 4: Inicializar el estado con un valor incorrecto
¿Qué pasa?: Si no le das a tu estado un valor inicial correcto, puede causar problemas más adelante, especialmente con TypeScript.
Imagina que intentas iniciar una cuenta con nada, o undefined, en lugar de cero. TypeScript no estará contento.
Solución: Especifica un valor inicial correcto al usar useState. Así TypeScript y tu código estarán felices.

ERROR 5: No declarar los tipos de Hooks
¿Qué pasa?: Si no dices a TypeScript qué tipo de datos estás usando con tus hooks, puede haber problemas más adelante.
Imagina usar useState sin decirle a TypeScript qué tipo de datos estás usando. Eso puede causar errores de tipo.
Solución: Declarar los tipos correctos para tus hooks. Así TypeScript puede hacer su magia y mantener todo en orden.

ERROR 6: No usar inferencia de tipos
¿Qué pasa?: A veces, TypeScript puede inferir los tipos por sí mismo, pero si no lo dejas, puedes terminar con un código más largo de lo necesario.
Imagina que declaras explícitamente los tipos de todo, incluso cuando TypeScript podría entenderlo por sí mismo.
Solución: Deja que TypeScript haga su trabajo. Si puedes, deja que infiera los tipos por sí mismo y así tu código será más limpio y claro.

ERROR 7: Manipular el DOM directamente
¿Qué pasa?: En React, debemos dejar que React maneje el DOM. Manipularlo directamente puede causar problemas.
Imagina que cambias el texto de un elemento directamente usando innerHTML en lugar de dejar que React lo haga.
Solución: Usa el estado de React para manejar lo que se muestra en el DOM. Así, React puede hacer su trabajo correctamente.

ERROR 8: Usar useEffect para lógica de renderizado
¿Qué pasa?: Si metes lógica de renderizado en useEffect, puedes terminar con re-renderizaciones innecesarias y código difícil de entender.
Imagina que pones toda la lógica de renderizado dentro de useEffect. Esto puede hacer que tu componente se vuelva a renderizar más de lo necesario.
Solución: Mantén la lógica de renderizado dentro del componente. Así sabes exactamente qué está pasando y evitas re-renderizaciones innecesarias.

ERROR 9: No manejar correctamente las actualizaciones de estado derivadas
¿Qué pasa?: Si no manejas bien los estados que dependen de otros estados, puedes terminar con resultados incorrectos.
Imagina que tienes un estado que depende de otro, pero no te aseguras de que siempre esté actualizado.
Solución: Asegúrate de que tus estados derivados siempre estén basados en los valores más recientes. Así te evitas problemas extraños.

ERROR 10: Usar valores en el estado que no son necesarios
¿Qué pasa?: Si guardas valores en el estado que puedes calcular fácilmente cuando renderizas, puedes estar añadiendo complejidad innecesaria.
Imagina que guardas una lista filtrada en el estado en lugar de calcularla cada vez que renderizas.
Solución: Calcula los valores cuando los necesites en lugar de guardarlos en el estado. Así, tu código será más sencillo y eficiente.
