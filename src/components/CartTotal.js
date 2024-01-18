import React from 'react';

function CartTotal({ price }) {
  return (
    <div className="flex flex-col items-center mt-20 p-4 border-2 border-black rounded CartTotal px-8 w-60">
      <h1 className="text-2xl font-bold mb-4">Cart Total</h1>
      <div className="flex justify-between items-center mb-2">
        <p>Subtotal</p>
        <span className="ml-10">${price}</span>
      </div>
      <div className="flex justify-between items-center mb-2">
        <p>Shipping</p>
        <span className="ml-10">Free</span>
      </div>
      <div className="flex justify-between items-center mb-2">
        <p>Total</p>
        <span className="ml-10">${price}</span>
      </div>
      <div className="flex items-center justify-center mt-4">
        <button
          onClick={() => {}}
          className="p-2 bg-lightcoral text-white rounded cursor-pointer hover:bg-darkseagreen"
        >
          Process to checkout
        </button>
      </div>
    </div>
  );
}

export default CartTotal;
