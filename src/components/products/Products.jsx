import React from 'react';
import Spinner from '../spinner/Spinner';
import Product from '../product/Product';
import './products.scss';

function Products(props) {

    const {helados: {result, loading}, addToCart}=props;//de useFetch

    return (
        <div className='products'>
        {
            loading || !result 
                ? <Spinner />
                : result.map(helado=> {
                    return (
                        <Product key={helado.id} helado={helado} addToCart={addToCart} />
                    );
                })
        }
        </div>
    );
};

export default React.memo(Products);
