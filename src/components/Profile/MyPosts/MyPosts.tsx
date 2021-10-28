import React from 'react';
import styles from './MyPosts.module.scss';
import Post from './Post/Post';
import {PostsType} from '../../../redux/state';


type MyPostsPropsType = {
  posts: PostsType
}

const MyPosts: React.FC<MyPostsPropsType> = ({posts}) => {

  const postsItems = posts
    .map(p => <Post message={p.message} likesCount={p.likesCount}/>);

  let newPostElement = React.createRef<HTMLTextAreaElement>();

  let addPost = () => {
    if (newPostElement.current) {
      let text = newPostElement.current.value;
      alert(text);
    }
  }

  return (
    <div>
      <div className={styles.postsBlock}>
        <h3>My posts</h3>
        <div>
          <div>
            <textarea ref={newPostElement}></textarea>
          </div>
          <div>
            <button onClick={addPost}>add post</button>
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