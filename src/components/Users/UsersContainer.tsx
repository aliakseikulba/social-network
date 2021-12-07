import {connect} from 'react-redux';
import {Users} from './Users';
import {followAC, setUsersAC, unfollowAC, UserItemType} from '../../redux/usersReducer';
import {AppStateType} from '../../redux/reduxStore';
import {Dispatch} from 'redux';

type MapStateToPropsType = {
  users: Array<UserItemType>
}
type MapDispatchToPropsType = {
  follow: (userID: string) => void
  unfollow: (userId: string) => void
  setUsers: (users: Array<UserItemType>) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType;


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    users: state.usersPage.users
  };
};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    follow: (userID: string) => {
      dispatch(followAC(userID));
    },
    unfollow: (userID: string) => {
      dispatch(unfollowAC(userID));
    },
    setUsers: (users: Array<UserItemType>) => {
      dispatch(setUsersAC(users));
    }
  };
};


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);