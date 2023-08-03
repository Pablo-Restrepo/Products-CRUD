import React, { useState } from 'react';
import './AddProductComponent.css';
import ImageInput from './ImageInputComponent';
import ProductService from '../../services/ProductService';

const Modal = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [imagen, setImage] = useState(null);

    const saveProduct = async (e) => {
        e.preventDefault();

        if (!imagen) {
            alert('Selecciona una imagen');
            return;
        }

        const image = await convertImageToBase64(imagen);

        const product = { name, description, price, image };
        console.log(image);

        if (name.trim() === '' || price.trim() === '') {
            alert('Hay campos vacíos');
            return;
        }

        ProductService.createProduct(product)
            .then((response) => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const convertImageToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.onload = () => {
                resolve(reader.result.split(',')[1]);
            };

            reader.onerror = (error) => {
                reject(error);
            };

            reader.readAsDataURL(file);
        });
    };

    return (
        <div className='add-product'>
            <div class="add-product-form">
                <h2>Crear Producto</h2>
                <form>
                    <div class="form-group">
                        <div className='form-group-img-upload'>
                            <ImageInput selectedFile={imagen} onSelectFile={setImage} />
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
