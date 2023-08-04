import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import AddProductComponent from './components/AddProductComponent/AddProductComponent';
import ProductListComponent from './components/ProductListComponent/ProductListComponent';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <HeaderComponent />
        <div className='container'>
          <Routes>
            <Route exact path='/' element={<ProductListComponent />}></Route>
            <Route path='/products' element={<ProductListComponent />}></Route>
            <Route path='/add-product' element={<AddProductComponent />}></Route>
            <Route path='/edit-product/:id' element={<AddProductComponent />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
