import React from 'react';
import { useStore } from '../store';

const DistributionComponent: React.FC = () => {
  const { products, distributeProduct, distribute } = useStore();

  return (
    <div>
      <h2>Distribution Center</h2>
      <button onClick={() => distributeProduct()}>Distribute Product</button>
      <h3>Distributed: {distribute}</h3>
    </div>
  );
};

export default DistributionComponent;
