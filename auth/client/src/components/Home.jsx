import React , { useEffect }from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"
 

function Home(){
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
    axios.defaults.withCredentials=true;
    const navigate=useNavigate()
    useEffect(()=>{
        axios.get('http://localhost:3001/home')
        .then(result => {
            console.log(result)
            if(result.data !=="success"){
                //navigate('/login')
            }
        })
        .catch(err => console.log(err))
    },[])
    return (
        <div>
          <nav>
            <ul style={{ display: 'flex', listStyle: 'none' }}>
              <li style={{ marginRight: '10px' }}>
                <a href="/login">Login</a>
              </li>
              <li style={{ marginRight: '10px' }}>
                <a href="/register">Register</a>
              </li>
              <li style={{ marginRight: '10px' }}>
              <a href="/client">clients</a>
              </li>
              <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
            </ul>
          </nav>
          <h1>Welcome to Home Page</h1>
        </div>
      )
}

export default Home;