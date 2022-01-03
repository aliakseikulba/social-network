export type UserItemType = {
  id: number
  photos: { small: string, large: string }
  followed: boolean
  status: string
  name: string
  location: { city: string, country: string }
}
export type UsersStateType = typeof initialState;

type ActionsType = ReturnType<typeof follow>
  | ReturnType<typeof unfollow>
  | ReturnType<typeof setUsers>
  | ReturnType<typeof setCurrentPage>
  | ReturnType<typeof setTotalUsersCount>
  | ReturnType<typeof setToggleIsFetching>
  | ReturnType<typeof toggleFollowingInProgress>

const initialState = {
  users: [] as Array<UserItemType>,
  pageSize: 5,
  totalUsersCount: 1,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [] as Array<number>,
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

    case 'SET-FOLLOWING-PROGRESS': {
      return <UsersStateType>{
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userID]
          : [state.followingInProgress.filter(id => id !== action.userID)]
      };
    }

    default:
      return state;
  }
};


export const follow = (userID: number) => {
  return {
    type: 'FOLLOW',
    userID
  } as const;
};

export const unfollow = (userID: number) => {
  return {
    type: 'UNFOLLOW',
    userID
  } as const;
};

export const setUsers = (users: Array<UserItemType>) => {
  return {
    type: 'SET-USERS',
    users
  } as const;
};

export const setCurrentPage = (currentPage: number) => {
  return {
    type: 'SET-CURRENT-PAGE',
    currentPage
  } as const;
};

export const setTotalUsersCount = (totalCount: number) => {
  return {
    type: 'SET-TOTAL-USERS-COUNT',
    totalCount
  } as const;
};

export const setToggleIsFetching = (isFetching: boolean) => {
  return {
    type: 'SET-IS-FETCHING',
    isFetching
  } as const;
};

export const toggleFollowingInProgress = (isFetching: boolean, userID: number) => {
  return {
    type: 'SET-FOLLOWING-PROGRESS',
    isFetching,
    userID,
  } as const;
};

export {usersReducer};