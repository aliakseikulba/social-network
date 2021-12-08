export type UserItemType = {
  id: string
  photoURL: string
  followed: boolean
  status: string
  name: string
  location: { city: string, country: string }
}
export type UsersStateType = typeof initialState;

type ActionsType = ReturnType<typeof followAC>
  | ReturnType<typeof unfollowAC>
  | ReturnType<typeof setUsersAC>

const initialState = {
  users: [] as Array<UserItemType>
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
      return {...state, users: [...state.users, ...action.users]};
    }

    default:
      return state;
  }
};


export const followAC = (userID: string) => {
  return {
    type: 'FOLLOW',
    userID
  } as const;
};

export const unfollowAC = (userID: string) => {
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

export {usersReducer};
