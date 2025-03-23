// src/components/PostCard.jsx
import React, { useState } from 'react';

const PostCard = ({ post, onLike, onAddComment }) => {
  const [comment, setComment] = useState('');

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      onAddComment(post.id, comment);
      setComment('');
    }
  };

  return (
    <div className="post-card">
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <div className="actions">
        <button onClick={() => onLike(post.id)}>Like {post.likes || 0}</button>
        <form onSubmit={handleSubmitComment}>
          <input
            type="text"
            value={comment}
            onChange={handleCommentChange}
            placeholder="Add a comment"
          />
          <button type="submit">Comment</button>
        </form>
      </div>
      <div className="comments">
        {post.comments?.map((comment, index) => (
          <p key={index} className="comment">
            {comment}
          </p>
        ))}
      </div>
    </div>
  );
};

export default PostCard;
