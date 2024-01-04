import Post from "./Post";
import Header2 from "../components/Header2";

const Posts = () => {
  return (
    <div className="font-inter text-white">
      <div className="bg-gray w-full min-h-screen">
        <div className="py-4 px-10 bg-black">
          <div className="flex justify-between items-center">
            <Header2 />
          </div>
        </div>
        <div className="p-10">
          <div className="flex justify-between items-center mb-6">
          <button className="bg-black p-2 rounded">
            <a href="/Posting" className="text-white" style={{ textDecoration: 'none' }}>
              Rédiger
            </a>
          </button>
            <div className="flex items-center bg-brown rounded p-2">
              <span className="text-white mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.1 1.1 0 0 0-.115-.098 6.493 6.493 0 0 0 1.398-1.397zM13 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent outline-none text-white placeholder-white flex-grow"
              />
              <button className="bg-black text-white p-2 rounded ml-2">Search</button>
            </div>
          </div>
          <div className="space-y-4">
          <Post />
          </div>
        </div>
      </div>
      <footer className="bg-black text-white p-4 text-center mt-auto">
        All Rights Reserved. © 2024 Forum Name
      </footer>
    </div>
  );
};

export default Posts;
