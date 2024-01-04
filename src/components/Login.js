import './static/css/style.css';
import './static/css/css2.css';
import Footer from "./Footer";
import Header from "./Header";
import SideBar from './SideBar';
import { Link } from 'react-router-dom';
import React from 'react'
import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
const Login = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()
    //token
    axios.defaults.withCredentials = true;

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/login', { email, password })
            .then(result => {
                console.log(result)
                if (result.data === "success") {
                    navigate('/home')
                }else{
                    navigate('/login')
                }
            })
            .catch(err => console.log(err))
    }
    return (
        <>
            <img className="wave" src="img/wave.svg" />
            <div className="container">
                <div className="img">
                    <img src="img/authentication.svg" />
                </div>
                <div className="login-container">
                    <form action="login.html" onSubmit={handleSubmit}>
                        <h2>Login</h2>
                        <p>Welcome back !</p>
                        <div className="input-div one">
                            <div className="i">
                                <i className="fas fa-user"></i>
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    className='input'
                                    name="email"

                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="input-div two">
                            <div className="i">
                                <i className="fas fa-key"></i>
                            </div>
                            <div>
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"

                                    name="password"
                                    className="input"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-success w-100 rounded-0">Sign In</button>

                        <div className="account">
                            <p>Don't have an account ?</p>
                            <Link to="/register" className="btn btn-success w-100 rounded-0">
                                Sign Up
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
export default Login;