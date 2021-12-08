type FriendItemType = {
  id: number
  name: string
  surname: string
  friendPhoto: string
}
export type SidebarStateType = typeof initialState;

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

const sideBarReducer = (state: SidebarStateType = initialState, action: any): SidebarStateType => {
  return {...state};
};

export {sideBarReducer};