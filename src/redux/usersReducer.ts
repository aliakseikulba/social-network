import {ActionsTypes} from './reduxStore';

type UsersItemType = {
  id: string
  followed: boolean
  status: string
  name: string
  location: {city: string, country: string}
}

export type UsersInitialStateType = typeof initialState;

const initialState = {
// users: [
//   {id: '1', followed: false, name: 'Nik', status: 'German Spy', location: {city: 'Berlin', country: 'Germany'}},
//   {id: '2', followed: false, name: 'Mike', status: 'Polish Spy', location: {city: 'Warsaw', country: 'Poland'}},
//   {id: '3', followed: true, name: 'Steeve', status: 'English Spy',
//     location: {city: 'London', country: 'United Kingdom'}},
// ] as Array<UsersItemType>
};

const usersReducer = (state: UsersInitialStateType = initialState, action: ActionsTypes):UsersInitialStateType => {

  switch (action.type) {

    case 'FOLLOW' : {
      return {...state, users: state.users.map(u => u.id === action.userID ? {...u, followed:true} : u)}
    }

    case 'UNFOLLOW': {
      return {...state, users: state.users.map(u => u.id === action.userID ? {...u, followed:false} : u)}
    }

    case 'SET-USERS': {
      return {...state, users: [...state.users, ...action.users]}
    }

    default:
      return state;
  }
};


export const followAC = (userID: string) => {
  return {
    type: 'FOLLOW',
    userID
  } as const
}

export const unfollowAC = (userID: string) => {
  return {
    type: 'UNFOLLOW',
    userID
  } as const
}

export const setUsersAC = () => {
  return {
    type: 'SET-USERS',
    users:
  }as const
}

export {usersReducer};
