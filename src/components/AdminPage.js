import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import DeleteConfirmation from './DeleteConfirmation';
import Header2 from './Header2';
import './admin.css'
const AdminPage = () => {
  const [users, setUsers] = useState([])
  const [itemToDelete, setItemToDelete] = useState(null);
  const [showModel, setShowModel] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [editableUserId, setEditableUserId] = useState(null);
  const [newRole, setNewRole] = useState("");
  useEffect(() => {
    axios.get('http://localhost:3001/admin')
      .then(result => setUsers(result.data))
      .catch(err => console.log(err))
  }, [])

  function showDeleteConfirmation(id) {
    setShowModel(true);
    setItemToDelete(id);
  }
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const filteredUsers = users.filter(user => {
    return user.nom.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.prenom.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase());
  });
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
  const toggleRoleEdit = (userId, role) => {
    setEditableUserId(userId);
    setNewRole(role);
  };

  const handleRoleChange = (e) => {
    setNewRole(e.target.value);
  };

  const saveRole = (userId) => {
    axios.post(`http://localhost:3001/role/${userId}`, { role: newRole }, { withCredentials: true })
      .then(res => {
        console.log(res);
        setEditableUserId(null);
        window.location.reload();
      }).catch(err => console.log(err));
  };
  return (
    <div className="flex flex-col bg-gray w-full min-h-screen text-black font-inter">
      <Header2></Header2>

      <main className="flex-grow p-4">
        <h1 className="text-4xl font-extrabold">Utilisateurs</h1>
        <input
          type="text"
          placeholder="Search Users"
          value={searchQuery}
          onChange={handleSearchChange}
          className="shadow-md rounded-2xl p-2"
        />
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center justify-between bg-white shadow-md rounded-2xl p-1 my-2 relative">

            <DeleteConfirmation
              showModel={showModel}
              title="Delete Confirmation"
              body="Are you sure to delete this user?"
              closeDeleteConfirmation={closeDeleteConfirmation}
              deleteConfirmHandler={() => deleteConfirmHandler(itemToDelete)}
            />
            <div className="d-flex vh-100 bg-primary justify-content-center  ">
              <div className="w-100 bg-white rounded p-4">

                <table className='table'>
                  <thead>
                    <tr>
                      <th className="table-cell-padding">Full Name</th>
                      <th className="table-cell-padding email-column">Email</th>
                      <th className="table-cell-padding">Age</th>
                      <th className="table-cell-padding">Country</th>
                      <th className="table-cell-padding role-column">Role</th>
                      <th className="table-cell-padding">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredUsers.map((user) => (
                      <tr key={user._id}>
                        <td>{user.nom + ' ' + user.prenom}</td>
                        <td>{user.email}</td>
                        <td>{user.age}</td>
                        <td>{user.pays}</td>
                        <td>
                          {editableUserId === user._id ? (
                            <input
                              type="text"
                              value={newRole}
                              onChange={handleRoleChange}
                            />
                          ) : (
                            user.role
                          )}
                        </td>
                        <td>
                          {editableUserId === user._id ? (
                            <button className='btn btn-success' onClick={() => saveRole(user._id)}>Save</button>
                          ) : (
                            <button className='btn btn-primary' onClick={() => toggleRoleEdit(user._id, user.role)}>Edit Role</button>
                          )}
                          <button className='btn btn-danger' onClick={() => showDeleteConfirmation(user._id)}>Remove</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-black text-white p-4 text-center mt-auto">
        All Rights Reserved. © 2024 Forum Name
      </footer>
    </div>
  )
}

export default AdminPage
