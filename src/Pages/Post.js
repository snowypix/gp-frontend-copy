import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import DeleteConfirmation from '../components/DeleteConfirmation';
import axios from 'axios';

const PostList = () =>
{

    //Traitement dyal les postes (fetch)
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch("http://localhost:3001/Posts"); 
                if (response.ok) {
                    const data = await response.json();
                    setPosts(data);
                } else {
                    console.error('Failed to fetch posts');
                }
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, []);

  
    return (
        <div >
           
            {posts.map((post) => (
                <Post
                    postId={post._id}
                    title={post.titre}  
                    date={post.date}
                    creator={post.personne}
                    comments='0'
                    category='Unspecified'
                />
            ))}
        </div>
    );
};
export default PostList;

const Post = ({ title, date, creator, comments, category, postId }) => {

 const [showModel, setShowModel] = useState(false);
 const [itemToDelete, setItemToDelete] = useState(null);
  function showDeleteConfirmation(id) {
    setShowModel(true);
    setItemToDelete(id);
  }

  function closeDeleteConfirmation() {
    setShowModel(false);
  }

  const deleteConfirmHandler = (id) => {
    axios.delete(`http://localhost:3001/deletePost/${id}`)
      .then(res => {
        console.log(res);
        window.location.reload();
      })
      .catch(err => console.log(err));
  };
    return (
      <div className="bg-white text-gray-800 rounded-lg p-4 my-4 flex flex-col md:flex-row justify-between items-center">
         <DeleteConfirmation
        showModel={showModel}
        title="Delete Confirmation"
        body="Are you sure to delete the item?"
        closeDeleteConfirmation={closeDeleteConfirmation}
        deleteConfirmHandler={() => deleteConfirmHandler(itemToDelete)}
      />
        <div className="flex-1">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-sm">Creator: {creator} | Date: {date}</p>
        </div>
        <div className="flex-1 text-center md:text-right">
          <p>Comments: {comments}</p>
          <p>Category: {category}</p>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white rounded px-4 py-2 mt-2 md:mt-0 md:ml-4 transition-colors duration-200">
          <Link to={`/PostPage/${postId}`} style={{ color: 'white', textDecoration: 'none' }}>
            View more
          </Link>
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white rounded px-4 py-2 mt-2 md:mt-0 md:ml-4 transition-colors duration-200">
          <Link to={`/updatePost/${postId}`} style={{ color: 'white', textDecoration: 'none' }}>
            Update
          </Link>
        </button>
        <button >
        <a href="#" onClick={() => showDeleteConfirmation(postId)} className="btn btn-danger" role="menuitem">Remove</a>
        </button>
        
                          
                  
      </div>
    );
};