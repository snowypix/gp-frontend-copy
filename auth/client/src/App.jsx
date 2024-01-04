import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from "./components/Signup"
import Login from "./components/Login"
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from "./components/Home"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element= {<Home />} ></Route>
        <Route path='/clients' element= {<Home />} ></Route>
        <Route path='/register' element= {<Signup />} ></Route>
        <Route path='/login' element= {<Login />} ></Route>
       
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
