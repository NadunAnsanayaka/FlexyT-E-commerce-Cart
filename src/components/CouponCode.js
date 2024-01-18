import React from 'react';

function CouponCode() {
  return (
    <div className="flex flex-col items-center CouponCode mt-20">
      <input className="p-2 mr-8" placeholder="Coupon Code" />
      <button onClick={() => {}} className="mt-5 p-2 bg-lightcoral text-white border-none rounded cursor-pointer hover:bg-darkseagreen">Apply Coupon</button>
    </div>
  );
}

export default CouponCode;
