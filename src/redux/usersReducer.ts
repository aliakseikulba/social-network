export type UserItemType = {
  id: number
  photos: { small: string, large: string }
  followed: boolean
  status: string
  name: string
  location: { city: string, country: string }
}
export type UsersStateType = typeof initialState;

type ActionsType = ReturnType<typeof followAC>
  | ReturnType<typeof unfollowAC>
  | ReturnType<typeof setUsersAC>
  | ReturnType<typeof setCurrentPageAC>
  | ReturnType<typeof setTotalUsersCountAC>
  | ReturnType<typeof setToggleIsFetchingAC>

const initialState = {
  users: [] as Array<UserItemType>,
  pageSize: 5,
  totalUsersCount: 12,
  currentPage: 1,
  isFetching: true,
};

const usersReducer = (state: UsersStateType = initialState, action: ActionsType): UsersStateType => {

  switch (action.type) {

    case 'FOLLOW' : {
      return {...state, users: state.users.map(u => u.id === action.userID ? {...u, followed: true} : u)};
    }

    case 'UNFOLLOW': {
      return {...state, users: state.users.map(u => u.id === action.userID ? {...u, followed: false} : u)};
    }

    case 'SET-USERS': {
      return {...state, users: action.users};
    }

    case 'SET-CURRENT-PAGE': {
      return {...state, currentPage: action.currentPage};
    }

    case 'SET-TOTAL-USERS-COUNT': {
      return {...state, totalUsersCount: action.totalCount};
    }

    case 'SET-IS-FETCHING': {
      return {...state, isFetching: action.isFetching};
    }

    default:
      return state;
  }
};


export const followAC = (userID: number) => {
  return {
    type: 'FOLLOW',
    userID
  } as const;
};

export const unfollowAC = (userID: number) => {
  return {
    type: 'UNFOLLOW',
    userID
  } as const;
};

export const setUsersAC = (users: Array<UserItemType>) => {
  return {
    type: 'SET-USERS',
    users
  } as const;
};

export const setCurrentPageAC = (currentPage: number) => {
  return {
    type: 'SET-CURRENT-PAGE',
    currentPage
  } as const;
};

export const setTotalUsersCountAC = (totalCount: number) => {
  return {
    type: 'SET-TOTAL-USERS-COUNT',
    totalCount
  } as const;
};

export const setToggleIsFetchingAC = (isFetching: boolean) => {
  return {
    type: 'SET-IS-FETCHING',
    isFetching
  } as const;
};

export {usersReducer};
