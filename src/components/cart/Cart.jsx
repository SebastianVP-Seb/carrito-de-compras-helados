import React, {useEffect, useState} from 'react';
import { countDuplicateItemArray, removeItemArray, removeItemDuplicates } from '../arrayFunctions';
import './cart.scss';

const Cart = ({productsCart, getProductsCart, helados}) => {

  const [showCart, setShowCart]=useState(false);
  const widthCartContent=showCart ? 500 : 0;
  const [singlePrducts, setSingleProducts]=useState([]);
  const [totalPrice, setTotalPrice]=useState(0);

  //Carga los productos
  useEffect(()=>{
    const altProductsId=removeItemDuplicates(productsCart);
    //regresa el array sin los elementos repetidos
    setSingleProducts(altProductsId);
  }, [productsCart]);

  //Para actualizar el total del precio
  useEffect(()=>{
    const productsData=[];
    let totalPrice=0;

    //Para devolver los productos únicos en el carrito
    const allProductsId=removeItemDuplicates(productsCart);
    allProductsId.forEach((productId)=>{
      const quantity=countDuplicateItemArray(productId, productsCart);
      const productsValue={
        id: productId,
        quantity
      };
      productsData.push(productsValue);
    });
    //Muestra un obj con el id del producto y la cantidad que se tiene del mismo
    // console.log(productsData);
    if(!helados.loading && helados.result) {
      helados.result.forEach(helado=>{
        productsData.forEach(item=>{
          if(helado.id==item.id) {
            const totalValue=helado.price*item.quantity;
            totalPrice=totalPrice+totalValue;
          };
        });
      });
    };
    setTotalPrice(totalPrice);
  }, [productsCart, helados]);

  const openCart=()=>{
    setShowCart(true);
    document.body.style.overflow='hidden';//evita que se le haga scroll a la base
  };

  const closeCart=()=>{
    setShowCart(false);
    document.body.style.overflow='scroll';
  };

  const emptyCart=()=>{
    localStorage.removeItem('product_cart');
    getProductsCart();
    setShowCart(false);
  };

  const increaseQuantity=(id)=>{
    const arrayItemsCart=productsCart;
    arrayItemsCart.push(id);
    localStorage.setItem('product_cart', arrayItemsCart);
    getProductsCart();//refresca el carrito
  };

  const lowQuantity=id=>{
    const arrayItemsCart=productsCart;
    const result=removeItemArray(arrayItemsCart, id.toString());
    localStorage.setItem('product_cart', result);
    getProductsCart();
  };

  return (
    <div className='cart'>
      <button onClick={openCart} className={`${productsCart.length >0 ? 'btn_primary' : 'btn_secondary'}`} >
        {productsCart.length >0 ? 'Ver productos' : 'Carrito'}
      </button>
      <div className="cart_content" style={{width: widthCartContent}}>
        <CartContentHeader closeCart={closeCart} emptyCart={emptyCart} />
        <div className="cart_content_products">
          {
            singlePrducts.map((idItem, index)=>
            <CartContentProducts helados={helados} key={index} idItem={idItem} idsProductsCart={productsCart} 
              increaseQuantity={increaseQuantity} lowQuantity={lowQuantity} />
            )
          }
          <CartFooterContent totalPrice={totalPrice} />
        </div>
      </div>
    </div>
  );
};

const CartContentHeader=({closeCart, emptyCart, getProductsCart})=>{

  return (
    <div className="cart_content-header">
      <div className="container_btn-close">
          <button onClick={closeCart} className='btn_secondary' >Close</button>
        </div>
      <button className='cart_link' onClick={emptyCart} >
        Vaciar carrito
      </button>
    </div>
  );
};

const CartContentProducts=({helados: {loading, result}, idItem, idsProductsCart, increaseQuantity, lowQuantity})=>{

  if(!loading && result) {
    return result.map((product, index)=>{
      if(idItem == product.id) {//pregunta si es el mismo producto
        const quantity=countDuplicateItemArray(product.id, idsProductsCart);
        return (
          <RenderProducts key={index} product={product} quantity={quantity} increaseQuantity={increaseQuantity} 
            lowQuantity={lowQuantity} />
        );
      };
    });
  };
  return 'Jade'
};

const RenderProducts=({product, quantity, increaseQuantity, lowQuantity})=>{

  return (
    <div className="card_content-product">
      <img src={`http://localhost:8081/${product.image}`} alt={product.name} className='img_cart' />
      <div className="card_content-product-info">
        <div className="">
          {/* Máximo 25 caracteres  */}
          <p>{product.name.substr(0, 25)}</p>
          <p>{product.price.toFixed(2)} $ / ud</p>
        </div>
        <div>
          <p>{quantity} en el carrito</p>
          <div className="container_btns">
            <button className='btn_cart' onClick={()=>increaseQuantity(product.id)}>+</button>
            <button className='btn_cart' onClick={()=>lowQuantity(product.id)} >-</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const CartFooterContent=({totalPrice})=>{

  return (
    <div className="cartFooterContent">
      <div>
        <p>{`Total: $ ${totalPrice.toFixed(2)}`}</p>

      </div>
      <button className='cartFooterContent_btn1'>Confirmar pedido</button>
    </div>
  );
};

export default Cart;