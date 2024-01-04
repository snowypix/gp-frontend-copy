 
import { Link } from "react-router-dom";
import axios from 'axios';
import DeleteConfirmation from './DeleteConfirmation';
import moment from 'moment';
import '../Pages/Category.css';
import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";


const Category = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [categories, setCategories] = useState([]);
  const [showModel, setShowModel] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [decoded, setDecoded] = useState(null);

  //MENU REMOVE CATEGORY
  const [showMenus, setShowMenus] = useState({});
  const OneMenu = (id) => {
    setShowMenus(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  useEffect(() => {
    axios.get('http://localhost:3001/categories')
      .then(result => setCategories(result.data))
      .catch(err => console.log(err));
  }, []);

  function showDeleteConfirmation(id) {
    setShowModel(true);
    setItemToDelete(id);
  }

  function closeDeleteConfirmation() {
    setShowModel(false);
  }

  const deleteConfirmHandler = (id) => {
    axios.delete(`http://localhost:3001/delete/${id}`)
      .then(res => {
        console.log(res);
        window.location.reload();
      })
      .catch(err => console.log(err));
  };

  //role
  useEffect(() => {
    const getCookieValue = (name) => (
      document.cookie
        .split('; ')
        .find(row => row.startsWith(`${name}=`))
        ?.split('=')[1]
    );

    const token = getCookieValue('token');

    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        console.log(decodedToken.role);
        setDecoded(decodedToken);
      } catch (error) {
        console.error("Error decoding token:", error);
        // Gérer l'erreur de manière appropriée
      }
    }
  }, []);
  // Function to close the menu when clicking outside of it
  const closeMenu = (e) => {
    // Close only if clicking outside the menu
    if (showMenu && e.target.closest('.menu-container') === null) {
      setShowMenu(false);
    }
  };

  // Add event listener when the menu is shown
  useEffect(() => {
    if (showMenu) {
      document.addEventListener('click', closeMenu);
    }

    // Cleanup event listener
    return () => document.removeEventListener('click', closeMenu);
  }, [showMenu]);

  return (
    <div className="flex items-center justify-between bg-white shadow-md rounded-2xl p-4 my-2 relative">
      <DeleteConfirmation
        showModel={showModel}
        title="Delete Confirmation"
        body="Are you sure to delete the item?"
        closeDeleteConfirmation={closeDeleteConfirmation}
        deleteConfirmHandler={() => deleteConfirmHandler(itemToDelete)}
      />

      <div className="d-flex justify-content-center">
        <table className='table'>
          <thead>
            <tr>
              <th >Name</th>
              <th >Description</th>
              <th >Creation date</th>
              <th >Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((categorie) => {
              const showMenu = showMenus[categorie._id] || false;
              return (
                <tr key={categorie._id}>
                  <td>{categorie.nom}</td>
                  <td>{categorie.description}</td>
                  <td>{moment(categorie.createdAt).fromNow()}</td>
                  <td>
                    <div className="relative menu-container">
                      <button
                        onClick={() => OneMenu(categorie._id)}
                        className="text-black bg-white text-xl focus:outline-none"
                        style={{ fontSize: "2rem", padding: "0.5rem" }}
                      >
                        ⋮
                      </button>
                      {showMenu && decoded && decoded.role === 'admin' && (
                           <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white z-50">
                           <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                             <a href="#" onClick={() => showDeleteConfirmation(categorie._id)} className="block px-4 py-2 text-sm text-red hover:bg-gray-100" role="menuitem">Remove Category</a>
                           </div>
          
                        </div>
                      )}

                    </div>
                  </td>

                </tr>
              );
            })}
          </tbody>
        </table>
      </div>


    </div>
  );
};

export default Category;
