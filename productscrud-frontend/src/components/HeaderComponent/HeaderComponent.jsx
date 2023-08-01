import './HeaderComponent.css';
import React from 'react';
import { Link } from 'react-router-dom';

const HeaderComponent = ({ toggleModal }) => {
    return (
        <header className='HeaderComponent'>
            <h1 className='HeaderComponent-h1'>
                <a href='https://github.com/Pablo736/Products-CRUD' className='HeaderComponent-a'>
                    ProductsCRUD
                </a>
            </h1>
            <Link to='/add-product' className='jeje'>
                <button className='HeaderComponent-button' onClick={toggleModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M8.74998 16.6667C8.74998 16.9982 8.88168 17.3161 9.1161 17.5506C9.35052 17.785 9.66846 17.9167 9.99998 17.9167C10.3315 17.9167 10.6494 17.785 10.8839 17.5506C11.1183 17.3161 11.25 16.9982 11.25 16.6667V11.25H16.6666C16.9982 11.25 17.3161 11.1183 17.5505 10.8839C17.7849 10.6495 17.9166 10.3315 17.9166 10C17.9166 9.66849 17.7849 9.35055 17.5505 9.11613C17.3161 8.88171 16.9982 8.75001 16.6666 8.75001H11.25V3.33334C11.25 3.00182 11.1183 2.68388 10.8839 2.44946C10.6494 2.21504 10.3315 2.08334 9.99998 2.08334C9.66846 2.08334 9.35052 2.21504 9.1161 2.44946C8.88168 2.68388 8.74998 3.00182 8.74998 3.33334V8.75001H3.33331C3.00179 8.75001 2.68385 8.88171 2.44943 9.11613C2.21501 9.35055 2.08331 9.66849 2.08331 10C2.08331 10.3315 2.21501 10.6495 2.44943 10.8839C2.68385 11.1183 3.00179 11.25 3.33331 11.25H8.74998V16.6667Z" fill="white" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 37 37" fill="none">
                        <path d="M17.3438 2.16797L32.375 9.68359V28.4727L17.3438 35.9702L2.3125 28.4727V9.68359L17.3438 2.16797ZM28.6353 10.4062L17.3438 4.76953L12.9897 6.9375L24.209 12.6104L28.6353 10.4062ZM17.3438 16.043L21.6436 13.9111L10.4062 8.23828L6.05225 10.4062L17.3438 16.043ZM4.625 12.2852V27.0273L16.1875 32.8086V18.0664L4.625 12.2852ZM18.5 32.8086L30.0625 27.0273V12.2852L18.5 18.0664V32.8086Z" fill="white" />
                    </svg>
                </button></Link>
        </header>
    )
}

export default HeaderComponent