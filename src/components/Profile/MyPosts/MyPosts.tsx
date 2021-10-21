import React from 'react';
import styles from './MyPosts.module.scss';
import Post from './Post/Post';
import {PostItemType} from '../Profile';

type MyPostsPropsType = {
  data: PostItemType[]
}

const MyPosts = (props: MyPostsPropsType) => {

  const {data} = props;

  const postsItems = data
    .map(p => <Post message={p.message} likesCount={p.likesCount}/>);

  return (
    <div>
      <div className={styles.postsBlock}>
        <h3>My posts</h3>
        <div>
          <div>
            <textarea></textarea>
          </div>
          <div>
            <button>add post</button>
          </div>
        </div>
      </div>
      <div className={styles.posts}>
        {postsItems}
      </div>
    </div>
  );
};

export default MyPosts;