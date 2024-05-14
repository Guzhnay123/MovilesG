import React from 'react';
import { useStore } from '../store';

const FactoryComponent: React.FC = () => {
  const { products, produceProduct } = useStore();

  return (
    <div>
      <h2>Factory</h2>
      <button onClick={() => produceProduct()}>Produce Product</button>
      <h3>Products: {products}</h3>
    </div>
  );
};

export default FactoryComponent;
