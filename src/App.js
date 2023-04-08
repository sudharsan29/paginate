import './App.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from './Post';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);
  const [totalPosts, setTotalPosts] = useState(0);

  useEffect(() => {
    const loadPost = async () => {
      setLoading(true);
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(response.data);
      setTotalPosts(response.data.length);
      setLoading(false);
    };
    loadPost();
  }, []);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNum) => setCurrentPage(pageNum);
  const prevPage = () => setCurrentPage(currentPage - 1);
  const nextPage = () => setCurrentPage(currentPage + 1);

  const showApp = () => {
    return (
      <Post
        postPerPage={postPerPage}
        totalPosts={totalPosts}
        currentPage={currentPage}
        paginate={paginate}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    );
  };

  return (
    <div>
      <h2>Pagination</h2>
      <ul>
        {!loading ? (
          currentPosts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </ul>
      <ul>{showApp()}</ul>
    </div>
  );
};

export default App;
