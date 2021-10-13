import React from 'react';
import styles from './MyPosts.module.scss';
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      <div>
        My posts
        <div>
          <textarea></textarea>
          <button>add post</button>
        </div>
      </div>
      <div className={styles.posts}>
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default MyPosts;