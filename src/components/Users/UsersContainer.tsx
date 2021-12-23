import {connect} from 'react-redux';
import {
  follow,
  setCurrentPage, setToggleIsFetching, setTotalUsersCount,
  setUsers, toggleFollowingInProgress,
  unfollow,
  UserItemType
} from '../../redux/usersReducer';
import {AppStateType} from '../../redux/reduxStore';
import React, {Component} from 'react';
import {Users} from './Users';
import {Preloader} from '../common/Preloader/Preloader';
import {usersApi, GetUsersDataType} from '../../api/api';


type MapStateToPropsType = {
  users: Array<UserItemType>
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
  followingInProgress: Array<number>
}
type MapDispatchToPropsType = {
  follow: (userID: number) => void
  unfollow: (userId: number) => void
  setUsers: (users: Array<UserItemType>) => void
  setCurrentPage: (pageNumber: number) => void
  setTotalUsersCount: (totalCount: number) => void
  setToggleIsFetching: (isFetching: boolean) => void
  toggleFollowingInProgress: (isFetching: boolean, userID: number) => void
}
export type UsersApiPropsType = MapStateToPropsType & MapDispatchToPropsType;

//второй контейнер для отправки запросов
class UsersApi extends Component<UsersApiPropsType> {

  componentDidMount(): void {
    this.props.setToggleIsFetching(true);
    if (this.props.users.length === 0) {
      usersApi.getUsers(this.props.currentPage, this.props.pageSize)
        .then((data: GetUsersDataType) => {
          this.props.setToggleIsFetching(false);
          this.props.setUsers(data.items);
          this.props.setTotalUsersCount(data.totalCount);
        });
    }
  }

  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber);
    this.props.setToggleIsFetching(true);
    usersApi.getUsers(pageNumber, this.props.pageSize)
      .then((data: GetUsersDataType) => {
        this.props.setToggleIsFetching(false);
        this.props.setUsers(data.items);
      });
  };


  render() {

    return (
      <>
        {this.props.isFetching && <Preloader/>}
        <Users users={this.props.users}
               totalUsersCount={this.props.totalUsersCount}
               pageSize={this.props.pageSize}
               currentPage={this.props.currentPage}
               onPageChanged={this.onPageChanged}
               unfollow={this.props.unfollow}
               follow={this.props.follow}
               toggleFollowing={this.props.toggleFollowingInProgress}
               followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,

  };
};

//контейнер, в котором лежит bll
export const UsersContainer = connect(mapStateToProps,
  {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setToggleIsFetching, toggleFollowingInProgress})(UsersApi)