import React from 'react';

const CartItem = ({ item, handleChange, handleRemove }) => {
  return (
    <div className="flex items-center justify-between border-b-0.5 p-5 cart_box" key={item.id}>
      <div className="flex items-center cart_img">
        <img src={item.img} alt={item.title} className="w-12 h-12" />
        <p className="font-light ml-2">{item.title}</p>
      </div>
      <div className="flex">
        <button onClick={() => handleChange(item, +1)} className="px-2 font-bold"> + </button>
        <button className="mx-2">{item.amount}</button>
        <button onClick={() => handleChange(item, -1)} className="px-2 font-bold"> - </button>
      </div>
      <div className="flex items-center">
        <span className="mr-10"> ${item.amount * item.price}</span>
        <button onClick={() => handleRemove(item.id)} className="border-none bg-transparent">Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
