import {createStore, combineReducers} from 'redux';
import profileReducer, {addPostActionCreator, updateNewPostTextActionCreator} from './profileReducer';
import dialogsReducer, {sendMessageActionCreator, updateNewMessageBodyActionCreator} from './dialogsReducer';
import sideBarReducer from './sideBarReducer';

export type ActionsTypes =
  ReturnType<typeof addPostActionCreator> | ReturnType<typeof updateNewPostTextActionCreator> |
  ReturnType<typeof sendMessageActionCreator> | ReturnType<typeof updateNewMessageBodyActionCreator>;

export type AppStateType = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sideBar: sideBarReducer
});

export const store = createStore(rootReducer);