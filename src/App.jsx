import React, { useState } from 'react';

import './App.css';
import Header from './components/header/Header';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="text-gray-600 text-4xl">
        <Header />
      </div>
    </>
  );
}

export default App;
