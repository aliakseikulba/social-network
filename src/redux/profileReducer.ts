import {ActionsTypes} from './reduxStore';


export type PostItemType = {
  id?: number
  message: string
  likesCount: number
}
export type ProfilePageInitialStateType = typeof initialState;

const initialState = {
  posts: [
    {id: 1, message: 'Hi, how are you?', likesCount: 2},
    {id: 2, message: 'It\'s my first post', likesCount: 5},
  ] as Array<PostItemType>,
  newPostText: ''
};

const profileReducer = (state: ProfilePageInitialStateType = initialState, action: ActionsTypes):
  ProfilePageInitialStateType => {

  switch (action.type) {
    case 'ADD_POST':
      const newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0
      };
      state.posts.push(newPost);
      state.newPostText = '';
      return state;
    case 'UPDATE-NEW-POST-TEXT':
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({type: 'ADD_POST'} as const);
export const updateNewPostTextActionCreator = (text: string) =>
  ({type: 'UPDATE-NEW-POST-TEXT', newText: text} as const);

export default profileReducer;