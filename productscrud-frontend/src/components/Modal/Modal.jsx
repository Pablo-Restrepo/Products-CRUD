import React, { useState } from 'react';
import './Modal.css';
import ImageInput from './ImageInput';
import ProductService from '../../services/ProductService';

const Modal = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            const base64String = reader.result.split(",")[1];
            setImage(base64String);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const saveProduct = (e) => {
        e.preventDefault();
        const product = { name, description, price };
        if (name.trim() === '' ||
            price.trim() === '') {
            alert('Hay campos vacios');
            return;
        }
        ProductService.createProduct(product).then((response) => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    };

    return (
        <div className='add-product'>
            <div class="add-product-form">
                <h2>Crear Producto</h2>
                <form>
                    <div class="form-group">
                        <div className='form-group-img-upload'>
                            <ImageInput />
                        </div>
                    </div>
                    <div class="form-group">
                        <input type="text" id="nombre" name="name" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div class="form-group">
                        <input type="number" id="price" name="price" placeholder="Precio" value={price} onChange={(e) => setPrice(e.target.value)} required />
                    </div>
                    <div class="form-group">
                        <textarea id="description" name="description" rows="4" cols="50" placeholder="Descripción" value={description} onChange={(e) => setDescription(e.target.value)} ></textarea>
                    </div>
                    <div className='form-group-button'>
                        <button type="submit" onClick={(e) => saveProduct(e)}>Crear Producto</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;
