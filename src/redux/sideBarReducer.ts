import {ActionsTypes} from './reduxStore';


type FriendItemType = {
  id: number
  name: string
  surname: string
  friendPhoto: string
}

export type SidebarInitialStateType = {
  friendsData: Array<FriendItemType>
}

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
  ] as Array<FriendItemType>
};

const sideBarReducer = (state: SidebarInitialStateType = initialState, action: ActionsTypes):
  SidebarInitialStateType => {
  return state;
};

export default sideBarReducer;