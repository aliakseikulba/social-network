import React from 'react';
import styles from './Post.module.scss'

type PostPropsType = {
  message: string
  likesCount: number
}

const Post: React.FC<PostPropsType> = (props) => {
  return (
    <div className={styles.item}>
      <img src="https://freesvg.org/img/abstract-user-flat-1.png" alt="user photo"/>
      {props.message}
      <div>
          <span>{props.likesCount} likes</span>
      </div>
    </div>
  );
}

export default Post;