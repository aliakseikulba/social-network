import React from 'react';
import styles from './Post.module.scss'

const Post = () => {
  return (
    <div className={styles.item}>
      <img src="https://freesvg.org/img/abstract-user-flat-1.png" alt="user photo"/>
      Post
      <div>
          <span>
            like
          </span>
      </div>
    </div>
  );
};

export default Post;