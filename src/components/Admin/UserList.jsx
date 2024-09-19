import React, { useState, useEffect } from 'react';
import img from '../../images/Admin.png';

function UserList() {
  const [User, setUser] = useState([]);
  const [error, setError] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch('http://localhost:8080/HostelFinder/users/get')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error in the Response');
        }
        return response.json();
      })
      .then((userdata) => {
        console.log(userdata);
        setUser(userdata);
        setCount(userdata.length);
        console.log(count);
      })
      .catch((error) => {
        setError(true);
      });
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-6 p-4">
      {User.map((eachuser, index) => {
        const { fullName, surName, dop, gender, adress, foodType } = eachuser;

        return (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md max-w-xs">
            <img src={img} alt="Error" className="w-24 h-24 mx-auto mb-4" />
            <div className="text-center">
              <h3 className="text-xl font-bold">{fullName} {surName}</h3>
              <h4 className="text-gray-500">{dop}</h4>
              <h5 className="text-gray-600">{gender}</h5>
              <h6 className="text-gray-700">{adress}</h6>
              <h6 className="text-gray-700">{foodType}</h6>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default UserList;
