import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// SideBar.js

const SideBar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    axios.post('http://localhost:3001/logout')
      .then(result => {
        console.log(result);
        if (result.data === 'Logged out successfully') {
          navigate('/login');
        }
      })
      .catch(err => console.log(err));
  };
  // Add your sidebar content here
  return (

    <div className="sidebar absolute top-full right-0 mt-2 bg-darkslategray-100 w-64 shadow-lg z-50">
      {/* Add sidebar content here */}
      <a className="p-4 text-white">
        Help
      </a>
      <a className="p-4 text-white">
        About
      </a>
      <a className="p-4 text-white">
        Terms of service
      </a>
      <a className="p-4 text-white">
        Q/A
      </a>
      <a href='/categories' className="p-6 text-white"  >Categories</a>
      <a href='/login' className="p-6 text-white" onClick={handleLogout}>Logout</a>
    </div>
  );
};

export default SideBar;
