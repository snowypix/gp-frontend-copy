import { useState } from "react"    
import { Link } from "react-router-dom";
import axios from 'axios'
import {useNavigate  }from "react-router-dom"
const countries=["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

function Signup() {
   
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [pays, setPays] = useState('');
  const [password, setPassword]=useState('')
    const navigate=useNavigate()
    const handleSubmit=(e)=> {
        e.preventDefault()
        axios.post('http://localhost:3001/register', {nom,prenom,age,email,password,telephone,pays})
        .then(result => {console.log(result)
        navigate('/login')
        })
        .catch(err => console.log(err))
    }
 return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-50">
        <div className="bg-white p-3 rounded w-25">
    <h2>Register</h2>

    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="nom"> Nom</label>
        <input
          type="text"
          placeholder=" "
          name="nom"
          className="form-control rounded-0"
          onChange={(e)=> setNom(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="prenom"> Prenom</label>
        <input
          type="text"
          placeholder=""
          name="prenom"
          className="form-control rounded-0"
          onChange={(e)=> setPrenom(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age"> Age</label>
        <input
          type="number"
          placeholder=""
          name="age"
          className="form-control rounded-0"
          onChange={(e)=> setAge(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder=" "
          name="email"
          className="form-control rounded-0"
          onChange={(e)=> setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="telephone">Telephone</label>
        <input
          type="text"
          placeholder=" "
          name="telephone"
          className="form-control rounded-0"
          onChange={(e)=> setTelephone(e.target.value)}
        />
      </div>
      <div className="mb-3">
      <label htmlFor="pays">Pays</label>
      <select
        name="pays"
        className="form-control rounded-0"
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
      <div className="mb-3">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          className="form-control rounded-0"
          onChange={(e)=> setPassword(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-success w-100 rounded-0">Sign Up</button>
      </form>
      <p>Already have an Account</p>
      <Link to="/login" className="btn btn-default borded w-100 bg-light rounded-0 text-decoration-none">
         Sign In
         </Link>
    
  </div>
</div>
    )
}


export default Signup;