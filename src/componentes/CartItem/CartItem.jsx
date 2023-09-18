import React, { useContext } from 'react';
import propTypes from 'prop-types';
import {TbShoppingCartX} from 'react-icons/tb';

import formatCurrency from '../../formatCurrency/formatCurrency';
import './CartItem.css';
import AppContext from '../../context/AppContext';

function CartItem({ data }) {

  const {cartItems, setCartItems} = useContext(AppContext);
  const { id ,thumbnail, title, price } = data;

  const handleRemoveItem = () => {
    const updatedItems = cartItems.filter((item) => item.id != id);
    setCartItems(updatedItems);
  };

  return(
    <section className="cart-item">
      <img src={thumbnail} 
        alt="imagem do produto" 
        className="cart-item-image" />

      <div className="cart-item-content">
        <h3 className="cart-item-title">{title}</h3>
        <h3 className="cart-item-price">{formatCurrency(price, 'BRL')}</h3>

        <button type="button" 
          className="button-remove-item"
          onClick={handleRemoveItem}
        >
          <TbShoppingCartX />
        </button>
      </div>
    </section>
  );
}

export default CartItem;

CartItem.propTypes = {
  data: propTypes.object
}.isRequired;
