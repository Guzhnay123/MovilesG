import React from 'react';
import FactoryComponent from './components/factory'; 
import DistributionComponent from './components/distribution'; 

const App: React.FC = () => {
  return (
    <div>
      <FactoryComponent />
      <DistributionComponent />
    </div>
  );
};

export default App;
