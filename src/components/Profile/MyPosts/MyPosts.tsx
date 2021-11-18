import React from 'react';
import styles from './MyPosts.module.scss';
import Post from './Post/Post';
import {ActionsTypes, ActionUpdateNewPostTextType, PostsType} from '../../../redux/state';


type MyPostsPropsType = {
  posts: PostsType
  newPostText: string
  dispatch: (action: ActionsTypes) => void
}

const MyPosts: React.FC<MyPostsPropsType> = ({posts,newPostText, dispatch}) => {

  const postsItems = posts
    .map(p => <Post message={p.message} likesCount={p.likesCount}/>);

  let newPostElement = React.createRef<HTMLTextAreaElement>();

  let addNewPost = () => {
    dispatch({type: 'ADD_POST'});
  };

  const onPostChange = () => {
    if (newPostElement.current) {
      let text = newPostElement.current.value;
      const action: ActionUpdateNewPostTextType = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
      dispatch(action);
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
              onChange={onPostChange}/>
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