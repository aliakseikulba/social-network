import {combineReducers, createStore, Store} from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import sideBarReducer from './sideBarReducer';
import {Dispatch} from 'redux';
import {ActionsTypes} from '../types/Types';

const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sideBar: sideBarReducer,
});

const store: Store<AppStoreType, ActionsTypes> & {dispatch: Dispatch} = createStore(rootReducer);

export type AppStoreType = ReturnType<typeof rootReducer>

export default store;