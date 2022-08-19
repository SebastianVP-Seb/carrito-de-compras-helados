import React from 'react';
import './TopMenu.scss';
import Cart from '../cart/Cart';

function TopMenu({productsCart, getProductsCart, helados}) {
    return (
        <div className='top-menu' >
            <BrandNav />
            <MenuNav />
            <Cart productsCart={productsCart} getProductsCart={getProductsCart} helados={helados} />
        </div>
    );
};

export default TopMenu;

function BrandNav() {
    return (
        <div className='brandNav'>
            <h4>iAmSebastian</h4>
        </div>
    );
};

function MenuNav() {
    return (
        <div className='mr-auto'>
            <p href='#'>Dulces</p>
            <p href='#'>Paletas</p>
            <p href='#'>Aguas</p>
        </div>
    );
};
