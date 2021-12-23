import {createStore, combineReducers} from 'redux';
import {profileReducer} from './profileReducer';
import {dialogsReducer} from './dialogsReducer';
import {sideBarReducer} from './sideBarReducer';
import {usersReducer} from './usersReducer';
import {authReducer} from './authReducer';


export type AppStateType = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sideBar: sideBarReducer,
  usersPage: usersReducer,
  auth: authReducer,
});

export const store = createStore(rootReducer);


// @ts-ignore
window.store = store;

