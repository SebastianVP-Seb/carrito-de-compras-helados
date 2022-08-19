import TopMenu from './components/topMenu/TopMenu';
import useFetch from './hooks/useFetch';
import React, {useCallback, useEffect, useState} from 'react';
import { urlJsonProductos } from './utils/constants';
import Products from './components/products/Products';
import { Provider } from 'react-redux';
import store from './store';

function App() {

  const helados=useFetch(urlJsonProductos, null);
  const [productsCart, setProductsCart]=useState([]);

  useEffect(()=>{
    getProductsCart();
  },[]);

  //traerá los productos del carrito, si existen
  const getProductsCart=()=>{
    const existProducts=localStorage.getItem('product_cart');
    if(existProducts) {
      //split convertirá a array
      const previusProducts=existProducts.split(',');
      setProductsCart(previusProducts);
    } else {
      setProductsCart([]);
    };
  };

  const addToCart=useCallback((helado)=>{
      const nuevoHelado=productsCart;
      nuevoHelado.push(helado.id);
      setProductsCart(nuevoHelado);
      localStorage.setItem('product_cart', nuevoHelado);
      getProductsCart();//permite actualizar el texto del btn si hay o no artículos
  });
  
  return (
    <Provider store={store} >
      <div >
        <TopMenu productsCart={productsCart} getProductsCart={getProductsCart} helados={helados} />
        <Products helados={helados} addToCart={addToCart} />
      </div>
    </Provider>
  );
}

export default App;
