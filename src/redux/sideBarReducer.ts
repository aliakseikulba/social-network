import {ActionsTypes} from './reduxStore';


export type FriendsDataType = Array<FriendItemType>;

export type SidebarType = {
  friendsData: FriendsDataType
}
type FriendItemType = {
  id: number
  name: string
  surname: string
  friendPhoto: string
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
  ]
};

const sideBarReducer = (state: SidebarType = initialState, action: ActionsTypes): SidebarType => {
  return state;
};

export default sideBarReducer;