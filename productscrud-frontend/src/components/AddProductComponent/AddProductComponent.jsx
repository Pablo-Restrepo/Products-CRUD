import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './AddProductComponent.css';
import ImageInput from './ImageInputComponent';
import ProductService from '../../services/ProductService';

const AddProductComponent = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [imagen, setImage] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        ProductService.getProductById(id).then((response) => {
            setName(response.data.name);
            setDescription(response.data.description);
            setPrice(response.data.price);
            setImage(response.data.image);
        }).catch(error => {
            console.log(error);
        })
    }, [id]);

    const title = () => {
        if (id) {
            return <h2>Actualizar Producto</h2>;
        }
        else {
            return <h2>Crear Producto</h2>;
        }
    };

    const saveOrUpdateProduct = async (e) => {
        e.preventDefault();

        const image = await convertImageToBase64(imagen);
        const product = { name, description, price, image };

        if (id) {
            ProductService.updateProduct(id, product).then((response) => {
                console.log(response.data);
            }).catch(error => {
                console.log(error);
            });
        } else {
            ProductService.createProduct(product).then((response) => {
                console.log(response.data);
            }).catch(error => {
                console.log(error);
            });
        }
    };

    const convertImageToBase64 = (file) => {
        if (file == null) return;
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
                <h2>{title()}</h2>
                <form>
                    <div class="form-group">
                        <div className='form-group-img-upload'>
                            <ImageInput selectedFile={imagen} onSelectFile={setImage} id={id} />
                        </div>
                    </div>
                    <div class="form-group">
                        <input type="text" id="nombre" name="name" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div class="form-group">
                        <input type="number" id="price" name="price" placeholder="Precio" value={price} onChange={(e) => setPrice(e.target.value)} required />
                    </div>
                    <div class="form-group">
                        <textarea id="description" name="description" rows="4" cols="50" placeholder="Descripción" value={description} onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    <div className='form-group-button'>
                        <button type="submit" onClick={(e) => saveOrUpdateProduct(e)}>Crear Producto</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProductComponent;
