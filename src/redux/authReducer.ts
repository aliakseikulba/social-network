const SET_USER_DATA = 'SET-USER-DATA';

export type AuthType = typeof initialAuthState;

const initialAuthState = {
  userID: null,
  email: null,
  login : null,
  isAuth: false,
}

export const authReducer = (state: AuthType = initialAuthState, action: any) => {
switch (action.type) {
  case SET_USER_DATA: {
    return {
      ...state,
      ...action.data,
      isAuth: true,
    }
  }
  default:
    return state;
}
}

export const setAuthUserData = (id: number, email: string, login: string) => {
  return {
    type: SET_USER_DATA,
    data: {id, email, login}
  }
}