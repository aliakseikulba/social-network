
import {ActionsTypes, ProfilePageType} from '../types/types';

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
  posts: [
    {id: 1, message: 'Hi, how are you?', likesCount: 2},
    {id: 2, message: 'It\'s my first post', likesCount: 5},
  ],
  newPostText: ''
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes) => {

  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0
      };
      state.posts.push(newPost);
      state.newPostText = '';
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({type: ADD_POST} as const);
export const UpdateNewPostTextActionCreator = (text: string) =>
  ({type: UPDATE_NEW_POST_TEXT, newText: text} as const);

export default profileReducer;