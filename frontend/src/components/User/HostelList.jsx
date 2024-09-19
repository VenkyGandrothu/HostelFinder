import React, { useState, useEffect } from 'react';
import StarIcon from '@mui/icons-material/Star';
import Navbar from '../User/Navbar';
import { useNavigate } from 'react-router-dom';


function HostelList() {
  const navigate = useNavigate();

  const navigateTODetail = () => {
    navigate('/HostelDetail');
  };

  const [HosetlData, setHostelData] = useState([]);
  const [err, setErr] = useState(false);

  useEffect(() => {
    fetch('http://localhost:8080/HostelFinder/Hostel/get')
      .then(res => {
        if (!res.ok) {
          throw new Error('Error in the Response');
        }
        return res.json();
      })
      .then(data => {
        setHostelData(data);
      })
      .catch(error => {
        setErr(true);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="flex flex-wrap justify-center p-4 gap-6">
        {HosetlData.map((eachHostel) => {
          const { hostelId, hostelName, singleSharePrice, hostelAddress } = eachHostel;
          console.log('Hostel ID:' + hostelId);
          return (
            <div
              key={hostelId}
              className="bg-white rounded-lg shadow-md p-6 max-w-lg w-full cursor-pointer"
              onClick={navigateTODetail}
            >
              <div className="flex justify-between items-center">
                <span className="text-blue-800 text-xl">favorite</span>
                <div className="text-center">
                  <h3 className="text-xl font-semibold">{hostelName}</h3>
                  <h3 className="text-2xl font-bold">{singleSharePrice}{'/-'}</h3>
                  <div className="flex justify-center mt-2">
                    <StarIcon className="text-yellow-500" />
                    <StarIcon className="text-yellow-500" />
                    <StarIcon className="text-yellow-500" />
                    <StarIcon className="text-yellow-500" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HostelList;
