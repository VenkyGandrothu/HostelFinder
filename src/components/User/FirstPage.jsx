import Navbar from '../User/Navbar';
import Menimg from '../../images/Men.png';
import Ladiesimg from '../../images/Ladies.png';
import Colivingimg from '../../images/Coliving.png';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function FirstPage() {
  const navigate = useNavigate();

  const navigation = () => {
    navigate("/HostelList");
  }

  // Optional: Add Google Fonts or any external font
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div className='font-Montserrat'>
      <Navbar />
      <div className='flex flex-col lg:flex-row bg-white p-8 lg:pl-[100px]'>
        {/* Left Section - Hostel Cards */}
        <div className="flex flex-col space-y-6 items-center lg:items-start">
          {/* Mens Hostel */}
          <div
            className="relative flex items-center justify-center bg-gray-300 shadow-lg rounded-xl w-[280px] h-[150px] md:w-[300px] md:h-[160px] lg:w-[320px] lg:h-[170px] bg-cover bg-center cursor-pointer group transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            onClick={navigation}
          >
            <img
              src={Menimg}
              alt="Mens Hostel"
              className="absolute left-4 top-4 w-[100px] h-[90px] md:w-[120px] md:h-[100px] lg:w-[250px] lg:h-[150px] object-contain"
            />
            <div className="absolute bottom-4 left-15 rounded-lg shadow-md p-4 text-black text-4xl font-semibold flex items-center justify-center">
              Mens Hostels
            </div>
          </div>

          {/* Ladies Hostel */}
          <div
            className="relative flex items-center justify-center bg-gray-300 shadow-lg rounded-xl w-[280px] h-[150px] md:w-[300px] md:h-[160px] lg:w-[320px] lg:h-[170px] bg-cover bg-center cursor-pointer group transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            onClick={navigation}
          >
            <img
              src={Ladiesimg}
              alt="Ladies Hostel"
              className="absolute left-4 top-4 w-[100px] h-[90px] md:w-[120px] md:h-[100px] lg:w-[250px] lg:h-[150px] object-contain"
            />
            <div className="absolute bottom-4 left-15 rounded-lg shadow-md p-4 text-black text-4xl font-semibold flex items-center justify-center ">
              Ladies Hostels
            </div>
          </div>

          {/* Coliving Hostel */}
          <div
            className="relative flex items-center justify-center bg-gray-300 shadow-lg rounded-xl w-[280px] h-[150px] md:w-[300px] md:h-[160px] lg:w-[320px] lg:h-[170px] bg-cover bg-center cursor-pointer group transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            onClick={navigation}
          >
            <img
              src={Colivingimg}
              alt="Coliving Hostel"
              className="absolute left-4 top-4 w-[100px] h-[90px] md:w-[120px] md:h-[100px] lg:w-[250px] lg:h-[150px] object-contain"
            />
            <div className="absolute bottom-4 left-15 rounded-lg shadow-md p-4 text-black text-4xl font-semibold flex items-center justify-center">
              Coliving Hostels
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstPage;
