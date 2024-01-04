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
const countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];
const Register = () => {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
 
    const [pays, setPays] = useState('');
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/register', { nom, prenom, age, email , password, pays })
            .then(result => {
                console.log(result)
                navigate('/login')
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
                        <h2>Register</h2>
                        <p>Welcome !</p>


                        <div className="input-div two">
                            <div className="i">
                                <i className="fas fa-user"></i>
                            </div>
                            <div>
                                <label htmlFor="nom">Nom</label>
                                <input
                                    type="text"
                                    className='input'
                                    name="nom"

                                    onChange={(e) => setNom(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="input-div two">
                            <div className="i">
                                <i className="fas fa-user"></i>
                            </div>
                            <div>
                                <label htmlFor="prenom">Prenom</label>
                                <input
                                    type="text"
                                    className='input'
                                    name="prenom"

                                    onChange={(e) => setPrenom(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="input-div two">
                            <div className="i">
                                <i className="fas fa-user"></i>
                            </div>
                            <div>
                                <label htmlFor="age">Age</label>
                                <input
                                    type="number"
                                    className='input'
                                    name="age"

                                    onChange={(e) => setAge(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="input-div two">
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
                                <i className="fas fa-user"></i>
                            </div>
                            <div>
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    className='input'
                                    name="password"

                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="input-div two">
                            <div className="i">
                                <i className="fas fa-key"></i>
                            </div>
                            <label htmlFor="pays">Pays</label>
                            <select
                                name="pays"

                                value={pays}
                                onChange={(e) => setPays(e.target.value)}
                            >
                                <option value="">Sélectionnez un pays</option>
                                {countries.map((country) => (
                                    <option key={country} value={country}>
                                        {country}
                                    </option>
                                ))}
                            </select>
                        </div>
                    
                        <button type="submit" className="btn btn-success w-100 rounded-0">Sign Up</button>

                        <div className="account">
                            <p>Already have an Account?</p>
                            <Link to="/login" className="btn btn-default borded w-100 bg-light rounded-0 text-decoration-none">
                                Sign In
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
export default Register;