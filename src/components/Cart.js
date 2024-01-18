import React, { useState, useEffect } from 'react';
import CartItem from './CartItem'; // Import the new component
import "../styles/cart.css";
import CartTotal from './CartTotal';
import CouponCode from './CouponCode';

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
  };

  useEffect(() => {
    handlePrice();
  }, [cart]);  // Add dependency to re-run effect when cart changes

  return (
    <article className='px-10 mx-auto my-10 '>
      <div className="flex sm:justify-between items-center font-bold py-5 border-b-2">
      <div className=" lg:pl-10 lg:pr-56 text-center">Product</div>
      <div className=" lg:pl-40 lg:pr-14 text-center">Quantity</div>
      <div className=" lg:pl-7  text-center">Subtotal</div>
      <div className="sm:pr-7 text-center">Remove</div>
    </div>
      {
        cart?.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            handleChange={handleChange}
            handleRemove={handleRemove}
          />
        ))
      }
      <div className='flex justify-between items-center'>
      <CouponCode/>
     <CartTotal price={price}/>
      </div>
    </article>
  );
};

export default Cart;


