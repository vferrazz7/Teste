import React, {useContext} from 'react';
import {BiCartAlt} from 'react-icons/bi';

import './CartButton.css';
import AppContext from '../../context/AppContext';

function CartButton() {

  const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext);

  return (
    <button type="button" 
      className="cart__button"
      onClick={() => setIsCartVisible(!isCartVisible)}
    >
      <BiCartAlt />
      { cartItems.length > 0 && <span className="cart-status">{cartItems.length}</span> }
    </button>
  );
}

export default CartButton;
