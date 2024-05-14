## Zustand

- Manejar el estado de la fábrica , incluyendo la producción y distribución de sus productos.

import create from 'zustand';

Luego de haber instalado la biblioteca se puede hacer referencia a ella en el store.

- Primero se crea el store.ts que sera el que almacenara los estados de la fabrica.

  <interface FactoryStore {
  products: number; // Número de productos en la fábrica
  produceProduct: () => void; // Función para producir un producto
  distributeProduct: () => void; // Función para distribuir un producto
  distribute: number; // Número de productos distribuidos
}>

// Creación del hook de Zustand para manejar el estado de la fábrica

const useStore = create<FactoryStore>((set) => ({ ... }));: Crea un hook de estado llamado useStore utilizando create de zustand. 
Recibe una función como argumento que a su vez recibe una función set. Esta función set se usa para actualizar el estado.

products: 0, distribute: 0, ...: Define las propiedades iniciales del estado. products y distribute se inicializan con el valor 0.

produceProduct: () => ...: Define una función llamada produceProduct que se utiliza para aumentar el número de productos en uno.

distributeProduct que se utiliza para distribuir un producto. Resta uno al número de productos y aumenta el número de productos distribuidos en uno.

export { useStore };: Exporta el hook de estado useStore para que pueda ser utilizado en otros archivos de la aplicación.


**Componente Distribucion:

import { useStore } from '../store';: Importa el hook de estado useStore desde el archivo de tienda (store.ts). Esto te permite acceder al estado y a las funciones definidas en ese archivo.

const DistributionComponent: React.FC = () => { ... }: Define un componente.

const { products, distributeProduct, distribute } = useStore();: Utiliza el hook de estado useStore para obtener el estado (products y distribute) y las funciones (distributeProduct) necesarias para este componente

     Esto desestructura el objeto devuelto por useStore para acceder directamente a esas propiedades y funciones.

<button onClick={() => distributeProduct()}>Distribute Product</button>: Renderiza un botón que, cuando se hace clic, llama a la función distributeProduct() obtenida del estado. 
Esto inicia el proceso de distribución de productos.

<h3>Distributed: {distribute}</h3>: Renderiza un título (<h3>) que muestra la cantidad de productos distribuidos (distribute) obtenida del estado.

export default DistributionComponent;: Exporta el componente.

**Componente Factory:

import { useStore } from '../store';: 
Importa el hook de estado useStore.

const FactoryComponent: Define un componente funcional.

const { products, produceProduct } = useStore();: Utiliza el hook de estado useStore para obtener el estado (products) y las funciones (produceProduct) necesarias para este componente. 
Esto desestructura el objeto devuelto por useStore para acceder directamente a esas propiedades y funciones.

<button onClick={() => produceProduct()}>Produce Product</button>: Renderiza un botón que, cuando se hace clic, llama a la función produceProduct() obtenida del estado. 
Esto inicia el proceso de producción de productos. 

<h3>Products: {products}</h3>: Renderiza un título (<h3>) que muestra la cantidad de productos (products) obtenida del estado.

export default FactoryComponent;: Exporta el componente.

:::App principal:

import FactoryComponent from './components/factory';: Importa el componente FactoryComponent desde el archivo factory.tsx ubicado en el directorio components.

De igual manera para el archivo: distribution.tsx ubicado en el directorio components.

<FactoryComponent />: Renderiza el componente FactoryComponent, que se importó anteriormente.

<DistributionComponent />: Renderiza el componente DistributionComponent, que se importó anteriormente.

Asi se podra visualizar los componentes y realizar la practica sobre cambios de estado con zustand.


