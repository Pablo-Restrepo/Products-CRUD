import './App.css';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import Modal from './components/Modal/AddProductComponent';
import ProductListComponent from './components/ProductListComponent/ProductListComponent';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className='App'>
      <BrowserRouter>
        <HeaderComponent toggleModal={toggleModal} />
        <div className='container'>
          <Routes>
            <Route exact path='/' element={<ProductListComponent />}></Route>
            <Route path='/clientes' element={<ProductListComponent />}></Route>
            <Route path='/add-product' element={<Modal />}></Route>
          </Routes>
        </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
