import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import StarIcon from '@mui/icons-material/Star';

function Dashboard() {
  const [HostelData, setHostelData] = useState([]);
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:8080/HostelFinder/Hostel/get')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Error in the Response');
        }
        return res.json();
      })
      .then((data) => {
        setHostelData(data);
      })
      .catch((error) => {
        setErr(true);
      });
  }, []);

  const addHostel = () => {
    navigate('/AddHostel');
  };

  const userList = () => {
    navigate('/UserList');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="flex justify-between items-center bg-blue-900 p-4">
        <div className="text-white text-3xl font-bold">Dashboard</div>
        <ul className="flex space-x-6 items-center">
          <li onClick={userList} className="cursor-pointer text-white hover:text-pink-500">
            <span className="material-symbols-outlined">people</span>
          </li>
          <li className="cursor-pointer text-white hover:text-pink-500">
            <span className="material-symbols-outlined">notifications</span>
          </li>
          <li className="cursor-pointer text-white hover:text-pink-500">
            <span className="material-symbols-outlined">account_circle</span>
          </li>
        </ul>
      </nav>

      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {HostelData.map((eachHostel, key) => {
          const { hostelId, hostelName, singleSharePrice, hostelAddress } = eachHostel;
          return (
            <div key={key} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <span className="material-symbols-outlined cursor-pointer hover:text-red-500">favorite</span>
                <h3 className="text-xl font-bold">{hostelName}</h3>
              </div>
              <h3 className="text-lg text-gray-600">{singleSharePrice + '/-'}</h3>
              <div className="flex space-x-1 text-yellow-500">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center mt-10">
        <button
          onClick={addHostel}
          className="bg-blue-600 text-white py-3 px-8 rounded-full hover:bg-pink-600 transition-all transform hover:scale-105 relative overflow-hidden"
        >
          <span className="material-symbols-outlined">add</span> Add new Hostel
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
