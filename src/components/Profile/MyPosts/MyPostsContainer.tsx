import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profileReducer';
import {Store} from 'redux';
import MyPosts from './MyPosts';

type MyPostsContainerPropsType = {
  store: Store
}

const MyPostsContainer: React.FC<MyPostsContainerPropsType> = ({store}) => {
  const state = store.getState();

  const addPost = () => {
    store.dispatch(addPostActionCreator());
  };

  const onPostChange = (text: string) => {
    const action = updateNewPostTextActionCreator(text);
    store.dispatch(action);
  };

  return (
    <MyPosts updateNewPostText={onPostChange}
             addPost={addPost}
             posts={state.profilePage.posts}
             newPostText={state.profilePage.newPostText}
    />
  );
};

export default MyPostsContainer;