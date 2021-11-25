import {combineReducers, createStore, Store} from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import sideBarReducer from './sideBarReducer';
import {ActionsTypes} from '../types/Types';


export type AppStoreType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sideBar: sideBarReducer,
});

const store: Store<AppStoreType, ActionsTypes> = createStore(rootReducer);

export default store;