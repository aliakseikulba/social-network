import {ActionsTypes, SidebarType} from '../types/types';

const initialState = {
  friendsData: [
    {
      id: 1, name: 'Name', surname: 'Surname',
      friendPhoto: 'https://freesvg.org/img/abstract-user-flat-1.png'
    },
    {
      id: 1, name: 'Name', surname: 'Surname',
      friendPhoto: 'https://freesvg.org/img/abstract-user-flat-1.png'
    },
    {
      id: 1, name: 'Name', surname: 'Surname',
      friendPhoto: 'https://freesvg.org/img/abstract-user-flat-1.png'
    },
  ]
};

const sideBarReducer = (state: SidebarType = initialState, action: ActionsTypes): SidebarType => {
  return state;
};

export default sideBarReducer;