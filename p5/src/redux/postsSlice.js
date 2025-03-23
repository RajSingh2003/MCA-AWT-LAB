// src/redux/postsSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
  },
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    updateLike: (state, action) => {
      const { postId } = action.payload;
      const post = state.posts.find((post) => post.id === postId);
      if (post) {
        post.likes += 1;
      }
    },
    addComment: (state, action) => {
      const { postId, comment } = action.payload;
      const post = state.posts.find((post) => post.id === postId);
      if (post) {
        post.comments.push(comment);
      }
    },
  },
});

export const { setPosts, updateLike, addComment } = postsSlice.actions;

export const selectPosts = (state) => state.posts.posts;

export default postsSlice.reducer;
