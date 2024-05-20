import React from 'react';

import Component1 from '../components/component1';
import Component2 from '../components/component2';
import Component3 from '../components/component3';
import Component4 from '../components/componente4';
import Component5 from '../components/component5';
import Component6 from '../components/component6';

const Home2: React.FC = () => {
  return (
    <div>
      <h1>componentes 2</h1>
      <p>Esta es la página de inicio 2.</p>
      <Component1/>
      <Component2/>
      <Component3/>
      <Component4/>
      <Component5/>
      <Component6/>
    </div>
  );
};

export default Home2;