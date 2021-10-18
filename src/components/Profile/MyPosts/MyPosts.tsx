import React from 'react';
import s from './MyPosts.module.scss';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      <div className={s.postsBlock}>
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
      <div className={s.posts}>
        <Post message="Hi, how are you?" likesCount={2}/>
        <Post message="It's my first post" likesCount={5}/>
      </div>
    </div>
  );
};

export default MyPosts;