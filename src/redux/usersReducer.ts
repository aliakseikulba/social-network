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
users: [
  {id: '1', followed: false, name: 'Nik', status: 'German Spy', location: {city: 'Berlin', country: 'Germany'}},
  {id: '2', followed: false, name: 'Mike', status: 'Polish Spy', location: {city: 'Warsaw', country: 'Poland'}},
  {id: '3', followed: true, name: 'Steeve', status: 'English Spy',
    location: {city: 'London', country: 'United Kingdom'}},
] as Array<UsersItemType>
};

const usersReducer = (state: UsersInitialStateType = initialState, action: ActionsTypes):UsersInitialStateType => {

  switch (action.type) {

    case 'FOLLOW' : {
      return {...state}
    }

    case 'UNFOLLOW': {
      return {...state}
    }

    default:
      return state;
  }
};


export const followAC = () => {
  return {
    type: 'FOLLOW'
  } as const
}

export const unfollowAC = () => {
  return {
    type: 'UNFOLLOW'
  } as const
}

export {usersReducer};
