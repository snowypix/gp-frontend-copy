import React , {useState, useEffect} from 'react'
import { useParams , useNavigate } from "react-router-dom"
import axios from 'axios'
const UpdatePost = () => {  
  const {id} =useParams()
  const [titre,setTitle] =useState()
  const [contenu,setContenu] =useState()
  
  const navigate=useNavigate()

  useEffect( ()=>{
    axios.get('http://localhost:3001/edit/'+id)
  .then(result => {
    console.log(result)
    setTitle(result.data.titre)
    setContenu(result.data.contenu)
    
  })
    .catch(err => console.log(err))
},[])

const Update = (e)=>{
  e.preventDefault();
  axios.put(`http://localhost:3001/updateP/${id}`, {titre, contenu})
  .then(result => {
    console.log(result)
    navigate('/Posts')
  })
  .catch(err => console.log(err))
}
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center  ">
    <div className="w-100 bg-white rounded p-4">
        <form onSubmit={Update}>
          <h3>Update Post</h3>
          <div className='mb-2'>
            <label htmlFor="">Titre</label>
            <input type="text" placeholder='Enter Name' className='form-control'
            value={titre} onChange={(e) => setTitle(e.target.value)}/>
          </div>
          <div className='mb-2'>
            <label htmlFor="">Contenu</label>
            <input type="text" placeholder='Enter content' className='form-control'
            value={contenu} onChange={(e) => setContenu(e.target.value)}/>
          </div>
          
          <button className='btn btn-success'>Edit</button>
        </form>
    </div>
  </div>
  )
}

export default UpdatePost
