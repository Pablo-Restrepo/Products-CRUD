import './ProductListComponent.css';

import React, { useEffect, useState } from 'react';

import CardComponent from '../CardComponent/CardComponent';
import ProductService from '../../services/ProductService';

const ProductListComponent = () => {

    const [products, setProducts] = useState([]);

    const fetchProducts = () => {
        ProductService.getAllProducts()
            .then(response => {
                setProducts(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className='Cards'>
            {products.map((product, index) => (
                <CardComponent key={index} product={product} onDelete={() => fetchProducts()} />
            ))}
        </div>
    );
};

export default ProductListComponent