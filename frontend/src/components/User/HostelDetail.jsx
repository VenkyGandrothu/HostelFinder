import React from 'react';
import HostelImg from '../../images/Hostel1.jpg';


function HostelDetail() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold pl-2">Sri Ravi Mens Hostel</h1>
      <p className='addressofHostel text-gray-600 text-sm pl-2 mt-2'>
        Road no5, First Left, Near Metro station, Kphb, 500072
      </p>
      <img src={HostelImg} alt="error" className='hostelImg w-full max-w-screen-md h-auto mt-6 rounded-lg shadow-md' />
      <p className='priceofHostel text-4xl font-bold mt-4 pl-2'>
        ₹8000/-
      </p>
    </div>
  );
}

export default HostelDetail;
