import Category from "../components/Category";
import Header2 from "../components/Header2";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const Categories = () => {
  const [decoded, setDecoded] = useState(null);

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

  return (
    <div className="flex flex-col bg-gray w-full min-h-screen text-black font-inter">
      <Header2></Header2>
      <main className="flex-grow p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-4xl font-extrabold">Categories</h1><br/>
          <h3 className="text-left"><a href="/Posts">Discover more, find posts you surely would like!</a></h3>
          {decoded && decoded.role === 'admin' && (
            <Link
              to="/new-category"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Add Category
            </Link>
          )}
        </div>
        <section>
          <Category />
        </section>
      </main>
      <footer className="bg-black text-white p-4 text-center mt-auto">
        All Rights Reserved. © 2024 Forum Name
      </footer>
    </div>
  );
};

export default Categories;