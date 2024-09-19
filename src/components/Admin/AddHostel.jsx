import React, { useState } from 'react';


function AddHostel() {
  const [HostelData, setHostelData] = useState({
    hostelName: "",
    hostelAddress: "",
    singleSharePrice: "",
    twoSharePrice: "",
    threeSharePrice: "",
    fourSharePrice: "",
    ownerName: "",
    ownerPhoneno: "",
    email: "",
    hostelType: "",
    wifi: "",
    hotWater: "",
    washingMechine: "",
    foodType: ""
  });

  const dataChange = (e) => {
    const { name, value } = e.target;
    setHostelData(res => ({
      ...res,
      [name]: value
    }));
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(HostelData);

    fetch("http://localhost:8080/HostelFinder/Hostel/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(HostelData)
    }).then(() => {
      console.log("New hostel Added");
    }).catch((error) => {
      console.error("Error:", error);
    });

    setHostelData({
      hostelName: "",
      hostelAddress: "",
      singleSharePrice: "",
      twoSharePrice: "",
      threeSharePrice: "",
      fourSharePrice: "",
      ownerName: "",
      ownerPhoneno: "",
      email: "",
      hostelType: "",
      wifi: "",
      hotWater: "",
      washingMechine: "",
      foodType: ""
    });
  };

  return (
    <div className="p-4">
      <div className='text-center'>
        <h1 className='text-2xl font-bold mb-4'>Details Of the Hostel</h1>
      </div>

      <div className='max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg'>
        <form onSubmit={submit} className='space-y-6'>
          <div className="ahcontainer">
            <input type="text" className='inputtext w-full p-2 border-b-2 border-gray-200 focus:border-blue-500 outline-none' name='hostelName' value={HostelData.hostelName} placeholder='Enter Your Hostel Name' onChange={dataChange} />
          </div>
          <div className="ahcontainer">
            <input type="text" className='inputtext w-full p-2 border-b-2 border-gray-200 focus:border-blue-500 outline-none' name='hostelAddress' value={HostelData.hostelAddress} placeholder='Enter Your Hostel Address' onChange={dataChange} />
          </div>
          <div className="ahcontainer">
            <input type="text" className='inputtext w-full p-2 border-b-2 border-gray-200 focus:border-blue-500 outline-none' name='singleSharePrice' value={HostelData.singleSharePrice} placeholder='Price of the single room' onChange={dataChange} />
          </div>
          <div className="ahcontainer">
            <input type="text" className='inputtext w-full p-2 border-b-2 border-gray-200 focus:border-blue-500 outline-none' name='twoSharePrice' value={HostelData.twoSharePrice} placeholder='Price of the 2 share room' onChange={dataChange} />
          </div>
          <div className="ahcontainer">
            <input type="text" className='inputtext w-full p-2 border-b-2 border-gray-200 focus:border-blue-500 outline-none' name='threeSharePrice' value={HostelData.threeSharePrice} placeholder='Price of the 3 share room' onChange={dataChange} />
          </div>
          <div className="ahcontainer">
            <input type="text" className='inputtext w-full p-2 border-b-2 border-gray-200 focus:border-blue-500 outline-none' name='fourSharePrice' value={HostelData.fourSharePrice} placeholder='Price of the 4 share room' onChange={dataChange} />
          </div>
          <div className="ahcontainer">
            <input type="text" className='inputtext w-full p-2 border-b-2 border-gray-200 focus:border-blue-500 outline-none' name='ownerName' value={HostelData.ownerName} placeholder='Enter Hostel Owner Name' onChange={dataChange} />
          </div>
          <div className="ahcontainer">
            <input type="text" className='inputtext w-full p-2 border-b-2 border-gray-200 focus:border-blue-500 outline-none' name='ownerPhoneno' value={HostelData.ownerPhoneno} placeholder='Enter Your phone number' onChange={dataChange} />
          </div>
          <div className="ahcontainer">
            <input type="email" className='inputtext w-full p-2 border-b-2 border-gray-200 focus:border-blue-500 outline-none' name='email' value={HostelData.email} placeholder='Enter Your Email' onChange={dataChange} />
          </div>

          <div className="ahcontainer">
            <label className='block font-semibold mb-2'>Type of Hostel:</label>
            <div className='space-x-4'>
              <label><input type="radio" name="hostelType" value="Mens" checked={HostelData.hostelType === 'Mens'} onChange={dataChange} /> Mens</label>
              <label><input type="radio" name="hostelType" value="Ladies" checked={HostelData.hostelType === 'Ladies'} onChange={dataChange} /> Ladies</label>
              <label><input type="radio" name="hostelType" value="Coliving" checked={HostelData.hostelType === 'Coliving'} onChange={dataChange} /> Co-living</label>
            </div>
          </div>

          <div className="ahcontainer">
            <label className='block font-semibold mb-2'>WiFi:</label>
            <div className='space-x-4'>
              <label><input type="radio" name="wifi" value="Yes" checked={HostelData.wifi === 'Yes'} onChange={dataChange} /> Yes</label>
              <label><input type="radio" name="wifi" value="No" checked={HostelData.wifi === 'No'} onChange={dataChange} /> No</label>
            </div>
          </div>

          <div className="ahcontainer">
            <label className='block font-semibold mb-2'>Hot Water Supply:</label>
            <div className='space-x-4'>
              <label><input type="radio" name="hotWater" value="Yes" checked={HostelData.hotWater === 'Yes'} onChange={dataChange} /> Yes</label>
              <label><input type="radio" name="hotWater" value="No" checked={HostelData.hotWater === 'No'} onChange={dataChange} /> No</label>
            </div>
          </div>

          <div className="ahcontainer">
            <label className='block font-semibold mb-2'>Washing Machine:</label>
            <div className='space-x-4'>
              <label><input type="radio" name="washingMechine" value="Yes" checked={HostelData.washingMechine === 'Yes'} onChange={dataChange} /> Yes</label>
              <label><input type="radio" name="washingMechine" value="No" checked={HostelData.washingMechine === 'No'} onChange={dataChange} /> No</label>
            </div>
          </div>

          <div className="ahcontainer">
            <label className='block font-semibold mb-2'>Food Type:</label>
            <div className='space-x-4'>
              <label><input type="radio" name="foodType" value="Veg" checked={HostelData.foodType === 'Veg'} onChange={dataChange} /> Veg</label>
              <label><input type="radio" name="foodType" value="NonVeg" checked={HostelData.foodType === 'NonVeg'} onChange={dataChange} /> Non-Veg</label>
              <label><input type="radio" name="foodType" value="Both" checked={HostelData.foodType === 'Both'} onChange={dataChange} /> Both</label>
            </div>
          </div>

          <button type="submit" className='bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-white hover:text-blue-500 hover:border-blue-500 transition duration-300'>Add</button>
        </form>
      </div>
    </div>
  );
}

export default AddHostel;
