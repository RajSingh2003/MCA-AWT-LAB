// src/components/PostList.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPosts, updateLike, addComment, selectPosts } from '../redux/postsSlice';
import PostCard from './PostCard';

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);

  // Fetching posts from an API
  useEffect(() => {
    const fetchPosts = async () => {
      // Simulating an API request
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      dispatch(setPosts(data.slice(0, 10))); // Limit to 10 posts for the example
    };
    fetchPosts();
  }, [dispatch]);

  const handleLike = (postId) => {
    dispatch(updateLike({ postId }));
  };

  const handleAddComment = (postId, comment) => {
    dispatch(addComment({ postId, comment }));
  };

  return (
    <div className="post-list">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          onLike={handleLike}
          onAddComment={handleAddComment}
        />
      ))}
    </div>
  );
};

export default PostList;
