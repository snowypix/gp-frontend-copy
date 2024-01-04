import axios from 'axios';
import React, { useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import Header2 from '../components/Header2';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const Posting = () => {
  const navigate = useNavigate();
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');

  const handleTitleChange = (event) => {
    setPostTitle(event.target.value);
  };

  const handleBodyChange = (event) => {
    setPostBody(event.target.value);
  };

  const handlePostSubmit = (e) => {
    e.preventDefault();

    const [cookies] = useCookies(['token']);
    console.log(cookies)
    const decodedToken = jwtDecode(cookies.token);
 
    const loggedInUserId = decodedToken.id;

    axios
      .post(
        'http://localhost:3001/Posting',
        {
          titre: postTitle,
          contenu: postBody,
          personne: loggedInUserId,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      )
      .then((result) => {
        console.log('Post submitted successfully');
      })
      .catch((err) => {
        console.error('Failed to submit post:', err);
      })
      .finally(() => {
        setPostTitle('');
        setPostBody('');
      });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 flex flex-col">
      <Header2 />

      <main className="flex-grow">
        <div className="container mx-auto p-8 flex items-center justify-center">
          <div className="max-w-md w-full bg-gray-800 p-6 rounded-md shadow-md">
            <h1 className="text-3xl font-bold text-white mb-4 text-center">Express yourself</h1>
            <form className="max-w-md mx-auto" onSubmit={handlePostSubmit}>
              <div className="mb-4">
                <label htmlFor="postTitle" className="block text-gray-600 text-sm font-semibold mb-2">
                  Title:
                </label>
                <input
                  type="text"
                  id="postTitle"
                  className="w-full px-6 py-3 border rounded-md focus:outline-none focus:border-blue-500"
                  value={postTitle}
                  onChange={handleTitleChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="postBody" className="block text-gray-600 text-sm font-semibold mb-2">
                  Body:
                </label>
                <textarea
                  id="postBody"
                  className="w-full px-6 py-3 border rounded-md focus:outline-none focus:border-blue-500"
                  value={postBody}
                  onChange={handleBodyChange}
                ></textarea>
              </div> <center>
              <button type="submit" className="bg-black text-white p-2 rounded">Submit Post</button> <br/><br/>
              <p><a href='/Posts'>Abort, and return to home ←</a></p> </center>
            </form>
          </div>
        </div>
      </main>

      <footer className="bg-black text-white p-4 text-center mt-auto">
        All Rights Reserved. © 2024 Forum Name
      </footer>
    </div>
  );
};

export default Posting;