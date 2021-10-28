import React from 'react';
import styles from './MyPosts.module.scss';
import Post from './Post/Post';
import {PostsType} from '../../../redux/state';


type MyPostsPropsType = {
  posts: PostsType
  addPost: (post: string) => void
}

const MyPosts: React.FC<MyPostsPropsType> = ({posts, addPost}) => {

  const postsItems = posts
    .map(p => <Post message={p.message} likesCount={p.likesCount}/>);

  let newPostElement = React.createRef<HTMLTextAreaElement>();

  let addNewPost = () => {
    if (newPostElement.current) {
      let text = newPostElement.current.value;
      addPost(text);
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
            <button onClick={addNewPost}>add post</button>
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