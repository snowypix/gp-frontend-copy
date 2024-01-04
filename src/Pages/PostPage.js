import React, { useState, useEffect } from 'react';
import Header2 from '../components/Header2';
import { useParams } from 'react-router-dom';
import PostDetail from '../components/PostDetail'; 

const PostPage = () => {
    const [newComment, setNewComment] = useState('');
    const [comments, setComments] = useState([]);
    const topass = useParams();

    const handleCommentChange = (event) => {
        setNewComment(event.target.value);
    };

    const handleCommentSubmit = () => {
        if (newComment.trim() !== '') {
            const newCommentObj = {
                id: 0,
                author: 'Unknown',
                content: newComment,
                time: 'Just now',
                profilePic: '/default_profile_pic_placeholder.png',
            };

            setComments([...comments, newCommentObj]);
            setNewComment('');
        }
    };

    useEffect(() => {
        const fetchComments = async () => {
            try {
              const response = await fetch('');
              if (response.ok) {
                const data = await response.json();
                const formattedComments = data.map((comment) => ({
                  postid: comment.postId,
                  id: comment.id,
                  author: comment.name,
                  content: comment.body,
                  time: 'Just now',
                  profilePic: '/default_profile_pic_placeholder.png',
                }));
                setComments(formattedComments);
          
                // Set the desired post ID
                const firstComment = data[0];
                if (firstComment) {
                  setDesiredPostId(firstComment.postId);
                }
              } else {
                console.error('Failed to fetch comments');
              }
            } catch (error) {
              console.error('Error fetching comments:', error);
            }
          };

        fetchComments();
    }, []);

    return (
        <div className="bg-gray-900 text-gray-300 flex flex-col w-full">
            <Header2 />
            <main className="w-full p-4 flex-grow">
                <PostDetail torecieve={topass} />
                <br></br>
                <section className="mb-6 w-full">
                    <textarea
                        className="w-full bg-gray-800 rounded-lg p-3 text-gray-300 leading-normal resize-none focus:outline-none focus:ring-2 focus:ring-red-500"
                        rows="4"
                        placeholder="Write your comment"
                        value={newComment}
                        onChange={handleCommentChange}
                    ></textarea>
                    <button
                        className="bg-red-600 hover:bg-red-700 text-black font-bold py-2 px-4 rounded-lg float-right my-2 transition-colors duration-150"
                        onClick={handleCommentSubmit}
                    >
                        Send
                    </button>
                </section>
                <br></br><br></br>
                <section className="bg-gray-800 py-4 w-full" style={{ maxHeight: 'auto', minHeight: '50vh' }}>                    {comments.map((comment) => (
                        <div key={comment.id} className="bg-gray-700 my-4 p-4 rounded-lg shadow flex mx-auto w-5/6">
                            <img
                                src={comment.profilePic || 'default_profile_pic_placeholder.png'}
                                alt="Profile"
                                className="rounded-full h-12 w-12 mr-4"
                            />
                            <div className="flex-grow">
                                <div className="flex items-center justify-between mb-2">
                                    <div>
                                        <h4 className="font-bold text-lg text-red-500">{comment.author}</h4>
                                        <p className="text-gray-500 text-sm">{comment.time}</p>
                                    </div>
                                </div>
                                <p className="whitespace-pre-wrap text-gray-300">{comment.content}</p>
                            </div>
                        </div>
                    ))}
                </section>
            </main>
            <footer className="bg-black text-white p-4 text-center mt-auto">
                All Rights Reserved. © 2024 Forum Name
            </footer>
        </div>
    );
};

export default PostPage;
