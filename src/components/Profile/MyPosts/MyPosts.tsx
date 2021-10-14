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
        <Post message='Hi, how are you?' likesCount={2}/>
        <Post message="It's my first post" likesCount={5}/>
      </div>
    </div>
  );
}

export default MyPosts;