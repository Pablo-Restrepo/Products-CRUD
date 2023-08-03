import './App.css';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import Modal from './components/AddProductComponent/AddProductComponent';
import ProductListComponent from './components/ProductListComponent/ProductListComponent';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <HeaderComponent toggleModal />
        <div className='container'>
          <Routes>
            <Route exact path='/' element={<ProductListComponent />}></Route>
            <Route path='/clientes' element={<ProductListComponent />}></Route>
            <Route path='/add-product' element={<Modal />}></Route>
            <Route path='/edit-product/:id' element={<Modal />}></Route>
          </Routes>
        </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
