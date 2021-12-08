import React from 'react';
import styles from './Post.module.scss';
import {PostItemType} from '../../../../redux/profileReducer';


const Post: React.FC<PostItemType> = ({message, likesCount}) => {
  return (
    <div className={styles.item}>
      <img src="https://freesvg.org/img/abstract-user-flat-1.png" alt="user photo"/>
      {message}
      <div>
        <span>{likesCount} likes</span>
      </div>
    </div>
  );
};

export default Post;