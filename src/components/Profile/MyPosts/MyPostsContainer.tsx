import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profileReducer';
import {Store} from 'redux';
import MyPosts from './MyPosts';
import {StoreContext} from '../../../StoreContext';

// type MyPostsContainerPropsType = {
//   store: Store
// }

const MyPostsContainer: React.FC = () => {

  return <StoreContext.Consumer>
    {
      (store) => {
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
       )
      }
    }
    </StoreContext.Consumer>
};

export default MyPostsContainer;