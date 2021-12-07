import {createStore, combineReducers} from 'redux';
import profileReducer, {addPostActionCreator, updateNewPostTextActionCreator} from './profileReducer';
import dialogsReducer, {sendMessageActionCreator, updateNewMessageBodyActionCreator} from './dialogsReducer';
import sideBarReducer from './sideBarReducer';
import {followAC, setUsersAC, unfollowAC} from './usersReducer';

export type ActionsTypes = ReturnType<typeof addPostActionCreator>
  | ReturnType<typeof updateNewPostTextActionCreator>
  | ReturnType<typeof sendMessageActionCreator>
  | ReturnType<typeof updateNewMessageBodyActionCreator>
  | ReturnType<typeof followAC>
  | ReturnType<typeof unfollowAC>
  | ReturnType<typeof setUsersAC>;


export type AppStateType = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sideBar: sideBarReducer
});

export const store = createStore(rootReducer);
