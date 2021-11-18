import {ActionsTypes, ProfilePageType} from './state';

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state:ProfilePageType, action:ActionsTypes) => {

    if (action.type === ADD_POST) {
      const newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0
      };
      state.posts.push(newPost);
      state.newPostText = '';
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      state.newPostText = action.newText;
    }

  return state;
};

export default profileReducer;