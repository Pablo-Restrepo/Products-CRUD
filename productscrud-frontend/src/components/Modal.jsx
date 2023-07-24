import React from 'react';
import './Modal.css';

const Modal = ({ modalOpen, toggleModal }) => {
    return (
        <>
            {modalOpen && (
                <div className='modal'>
                    <div onClick={toggleModal} className='overlay'></div>
                    <div className='modal-content'>
                        <div className='image-upload-container'>
                            <input class="file-upload-input" type='file' onchange="readURL(this);" accept="image/*" />
                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 50 50" fill="none">
                                <path d="M20.8333 33.3333H29.1666C30.3125 33.3333 31.25 32.3958 31.25 31.25V20.8333H34.5625C36.4166 20.8333 37.3541 18.5833 36.0416 17.2708L26.4791 7.70832C26.2864 7.51519 26.0575 7.36196 25.8054 7.25742C25.5534 7.15287 25.2832 7.09906 25.0104 7.09906C24.7375 7.09906 24.4674 7.15287 24.2153 7.25742C23.9633 7.36196 23.7344 7.51519 23.5416 7.70832L13.9791 17.2708C12.6666 18.5833 13.5833 20.8333 15.4375 20.8333H18.75V31.25C18.75 32.3958 19.6875 33.3333 20.8333 33.3333ZM12.5 37.5H37.5C38.6458 37.5 39.5833 38.4375 39.5833 39.5833C39.5833 40.7291 38.6458 41.6666 37.5 41.6666H12.5C11.3541 41.6666 10.4166 40.7291 10.4166 39.5833C10.4166 38.4375 11.3541 37.5 12.5 37.5Z" fill="#00A3FF" />
                            </svg>
                            <h2 className='upload-img'>Subir imagen</h2>

                        </div>

                        <div className='name-price-container'>
                            <div className='name-container'>
                                <input type="text" id="nombre" name="nombre" placeholder="Nombre"></input>
                            </div>
                            <div className='price-container'>
                                <input type="text" id="price" name="price" placeholder="Precio"></input>
                            </div>
                        </div>

                        <div className='description-container'>
                            <textarea id="description" name="description" rows="4" cols="50" placeholder="Descripción"></textarea>
                        </div>

                        <div className='create-container'>
                            <button className='create-product-button'>Crear Producto</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;
