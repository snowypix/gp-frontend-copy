import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddCategory = () => {
  const [nom, setNom] = useState('');
  const [description, setDescription] = useState('');

  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3001/new-category', { nom, description })
      .then((result) => {
        alert('Category added Successfully!');
        navigate('/categories');
      })
      .catch((err) => console.log(err));
  };

  // Inline styles for larger form elements
  const inputStyle = {
    padding: '12px', // Larger padding inside the inputs
    margin: '10px', // Space between the inputs
    fontSize: '18px', // Larger font size for text
  };

  const buttonStyle = {
    padding: '10px 20px', // Larger padding for a bigger button
    fontSize: '18px', // Larger font size for button text
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-3xl p-24 border bg-light"> {/* Increased max width */}
        <form onSubmit={Submit}>
          <h3 className="text-center mb-4 text-xl">Add Category</h3>

          <div className="mb-4">
            <label htmlFor="nom" className="form-label text-lg">Nom Categorie</label>
            <input
              type="text"
              className="form-control"
              id="nom"
              name="nom"
              style={inputStyle}
              onChange={(e) => setNom(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="form-label text-lg">Description Categorie</label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              style={inputStyle}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-info" style={buttonStyle}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;
