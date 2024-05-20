import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Header from './layout/header';
import Home1 from './pages/home';
import Home2 from './pages/home2';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {/* <Route path="/" component={} /> */}
        <Route path="/home" element={<Home1/>} />
        <Route path="/home2" element={<Home2/>} />
      </Routes>
    </Router>
  );
};

export default App;
