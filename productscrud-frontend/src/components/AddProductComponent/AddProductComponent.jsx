import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './AddProductComponent.css';
import ImageInput from './ImageInputComponent';
import PopUpComponent from '../PopUpComponent/PopUpComponent';
import ProductService from '../../services/ProductService';

const AddProductComponent = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [imagenBase64, setImageBase64] = useState(null);
    const [popupMessage, setPopupMessage] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const { id } = useParams();

    const title = id ? "Actualizar Producto" : "Crear Producto";
    const buttonLabel = id ? "Actualizar Producto" : "Crear Producto";

    const saveOrUpdateProduct = async (e) => {
        e.preventDefault();

        if (!name || !price) {
            setPopupMessage('Complete el nombre y el precio del producto.');
            setShowPopup(true);
            return;
        }

        const image = await convertImageToBase64(imagenBase64);
        const createdAt = Date.now();
        const product = { name, description, price, image, createdAt };

        if (id) {
            ProductService.updateProduct(id, product).then((response) => {
                setPopupMessage('Producto actualizado correctamente');
                setShowPopup(true);
                console.log(response.data);
            }).catch(error => {
                console.log(error);
            });
        } else {
            ProductService.createProduct(product).then((response) => {
                setPopupMessage('Producto creado correctamente');
                setShowPopup(true);
                console.log(response.data);
            }).catch(error => {
                console.log(error);
            });
        }
    };

    const convertImageToBase64 = (file) => {
        if (file == null) return;
        if (file.length % 4 === 0 && /^[A-Za-z0-9+/]+[=]{0,2}$/.test(file)) return file;
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

    useEffect(() => {
        if (!id) {
            setName('');
            setDescription('');
            setPrice('');
            setImageBase64(null);
        }
        ProductService.getProductById(id).then((response) => {
            setName(response.data.name);
            setDescription(response.data.description);
            setPrice(response.data.price);
            setImageBase64(response.data.image);
        }).catch(error => {
            console.log(error);
        })
    }, [id]);

    return (
        <div className='add-product'>
            <div className="add-product-form">
                <h2>{title}</h2>
                <form>
                    <div className="form-group">
                        <div className='form-group-img-upload'>
                            <ImageInput selectedFile={imagenBase64} onSelectFile={setImageBase64} id={id} />
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="text" id="nombre" name="name" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <input type="number" id="price" name="price" placeholder="Precio" value={price} onChange={(e) => setPrice(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <textarea id="description" name="description" rows="4" cols="50" placeholder="Descripción" value={description} onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    <div className='form-group-button'>
                        <button type="submit" onClick={(e) => saveOrUpdateProduct(e)}>
                            {buttonLabel}
                        </button>
                    </div>
                </form>
            </div>
            <PopUpComponent message={popupMessage} show={showPopup} onClose={() => setShowPopup(false)} />
        </div>
    );
};

export default AddProductComponent;
