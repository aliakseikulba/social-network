import {createStore, combineReducers} from 'redux';
import {profileReducer} from './profileReducer';
import {dialogsReducer} from './dialogsReducer';
import {sideBarReducer} from './sideBarReducer';
import {usersReducer} from './usersReducer';


export type AppStateType = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sideBar: sideBarReducer,
  usersPage: usersReducer
});

export const store = createStore(rootReducer);
