import './App.css';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import Modal from './components/Modal/Modal';
import ProductListComponent from './components/ProductListComponent/ProductListComponent';
import React, { useState } from 'react';

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className='App'>
      <HeaderComponent toggleModal={toggleModal} />
      <ProductListComponent />
      <Modal modalOpen={modalOpen} toggleModal={toggleModal} />
    </div>
  );
}

export default App;
