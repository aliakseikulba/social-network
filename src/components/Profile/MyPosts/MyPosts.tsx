import React from 'react';
import styles from './MyPosts.module.scss';
import Post from './Post/Post';
import {MyPostsPropsType} from './MyPostsContainer';


const MyPosts: React.FC<MyPostsPropsType> = (props) => {

  const postsItems = props.posts
    .map(p => <Post message={p.message} likesCount={p.likesCount}/>);

  const newPostElement = React.createRef<HTMLTextAreaElement>();

  const onAddPost = () => {
    props.addPost();
  };

  const onPostChange = () => {
    if (newPostElement.current) {
      let text = newPostElement.current.value;
      props.updateNewPostText(text);
    }
  };

  return (
    <div>
      <div className={styles.postsBlock}>
        <h3>My posts</h3>
        <div>
          <div>
            <textarea
              ref={newPostElement}
              value={props.newPostText}
              onChange={onPostChange}/>
          </div>
          <div>
            <button onClick={onAddPost}>add post</button>
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