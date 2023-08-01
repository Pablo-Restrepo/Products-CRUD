import React from 'react'

import defaultimg from '../../assets/default.jpg'
import './CardComponent.css';
import ProductService from '../../services/ProductService';

const Card = ({ product, aux }) => {
    const deleteProduct = (productId) => {
        ProductService.deleteProduct(productId).then((response) => {

        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <div className='card'>
            <div className='card-content'>
                <div className='image-container'>
                    {product.image ? (
                        <img src={product.image} alt='product' />
                    ) : (
                        <img src={defaultimg} alt='default-product' />
                    )}
                </div>
                <div className='card-content-flex'>
                    <div className='card-name-container'>
                        <h3 className='card-name'>{product.name}</h3>
                    </div>
                    <div className='card-price-container'>
                        <h3 className='card-price'>${product.price}</h3>
                    </div>
                </div>

                <div className='card-container-buttons'>
                    <div className='card-button'>
                        <button className='edit-button'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="-2 -2 20 20" fill="none">
                                <path d="M13.4162 3.2C13.8651 2.75129 14.4738 2.49927 15.1085 2.49939C15.7432 2.49951 16.3519 2.75175 16.8006 3.20063C17.2493 3.64951 17.5013 4.25825 17.5012 4.89295C17.5011 5.52764 17.2488 6.13629 16.8 6.585L15.8837 7.5025L12.4987 4.1175L13.4162 3.20125V3.2ZM11.6162 5.00125L4.17122 12.4438C3.94524 12.6699 3.77492 12.9455 3.67372 13.2488L2.53122 16.6775C2.49441 16.7876 2.48898 16.9058 2.51556 17.0188C2.54213 17.1318 2.59965 17.2351 2.68167 17.3173C2.76369 17.3994 2.86697 17.4571 2.97993 17.4839C3.09289 17.5106 3.21107 17.5054 3.32122 17.4688L6.74997 16.325C7.05372 16.225 7.32872 16.0538 7.55497 15.8275L15 8.38625L11.615 5L11.6162 5.00125Z" fill="#FF805B" />
                            </svg>
                        </button>
                    </div>
                    <div className='card-button'>
                        <button className='delete-button' onClick={() => deleteProduct(product.id)} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="-2 -2 20 20" fill="none">
                                <path d="M15.8333 3.33333H12.9167L12.0833 2.5H7.91666L7.08332 3.33333H4.16666V5H15.8333M4.99999 15.8333C4.99999 16.2754 5.17558 16.6993 5.48815 17.0118C5.80071 17.3244 6.22463 17.5 6.66666 17.5H13.3333C13.7754 17.5 14.1993 17.3244 14.5118 17.0118C14.8244 16.6993 15 16.2754 15 15.8333V5.83333H4.99999V15.8333Z" fill="#FF0000" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className='card-descripcion-name'>
                    <h4 className='descripcion-name'>Descripción</h4>
                </div>
                <div className='card-descripcion'>
                    <p className='descripcion'>
                        {product.description}
                    </p>
                </div>
            </div>
        </div >
    )
}

export default Card