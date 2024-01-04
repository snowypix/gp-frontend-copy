import React, { useState, useEffect } from 'react';

const PostDetail = ({ torecieve }) => {
  const [post, setPost] = useState(null);

  /*useEffect(() => {
    fetch(`http://localhost:3001/PostPage/${torecieve}`)
      .then(response => response.json())
      .then(data => setPost(data))
      .catch(err => console.log(err));
  }, [torecieve]); */

  return (
    <section className="bg-gray-800 p-4 my-6 shadow-lg w-full">
      <h2 className="text-xl md:text-2xl font-bold text-white mb-2">Post title</h2>
      <h4 className="text-xl md:text-2xl font-bold text-white mb-2">Category: Unspecified</h4>
      <article className="bg-gray-700 rounded-lg p-3">Post content</article>
    </section>
  );
};

export default PostDetail;