import React from 'react';
import s from './MyPosts.module.scss';
import Post from './Post/Post';

const MyPosts = () => {

  const postData = [
    {id: 1, message: 'Hi, how are you?', likesCount: 2},
    {id: 2, message: 'It\'s my first post', likesCount: 5}
  ];

  const postsItem = postData
    .map(item => <Post message={item.message} likesCount={item.likesCount}/>);

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
        {postsItem}
      </div>
    </div>
  );
};

export default MyPosts;