import React from 'react';
import styles from './MyPosts.module.scss';
import Post from './Post/Post';
import {PostsType} from '../../../redux/state';


type MyPostsPropsType = {
  posts: PostsType
  newPostText: string
  addPost: () => void
  updateNewPostText: (text: string) => void
}

const MyPosts: React.FC<MyPostsPropsType> = ({posts, addPost, newPostText, updateNewPostText}) => {

  const postsItems = posts
    .map(p => <Post message={p.message} likesCount={p.likesCount}/>);

  let newPostElement = React.createRef<HTMLTextAreaElement>();

  let addNewPost = () => {
      addPost();
  };

  const onChangeHandler = () => {
    if(newPostElement.current) {
      let text = newPostElement.current.value;
      updateNewPostText(text);
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
              value={newPostText}
              onChange={onChangeHandler}/>
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