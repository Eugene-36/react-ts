import React, { useEffect, useState } from 'react';
import axios from 'axios';
import InfoTemplate from './components/cart/InfoTemplate';

import './App.css';

export interface Provider {
  id: number;
  name: string;
  price: number;
  category: string;
}

function App() {
  const [list, setList] = useState<Provider[]>([]);

  useEffect(() => {
    axios
      .get(`/books.json`)
      .then(function ({ data }) {
        setList(data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  }, []);

  return (
    <div className='App'>
      <InfoTemplate array={list} />
    </div>
  );
}

export default App;
