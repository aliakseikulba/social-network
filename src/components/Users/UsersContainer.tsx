import {connect} from 'react-redux';
import {
  follow,
  setCurrentPage, setToggleIsFetching, setTotalUsersCount,
  setUsers,
  unfollow,
  UserItemType
} from '../../redux/usersReducer';
import {AppStateType} from '../../redux/reduxStore';
import React, {Component} from 'react';
import {Users} from './Users';
import {Preloader} from '../common/Preloader/Preloader';


type MapStateToPropsType = {
  users: Array<UserItemType>
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
}
type MapDispatchToPropsType = {
  follow: (userID: number) => void
  unfollow: (userId: number) => void
  setUsers: (users: Array<UserItemType>) => void
  setCurrentPage: (pageNumber: number) => void
  setTotalUsersCount: (totalCount: number) => void
  setToggleIsFetching: (isFetching: boolean) => void
}
export type UsersApiPropsType = MapStateToPropsType & MapDispatchToPropsType;
type ResponseType = {
  data: {
    items: Array<UserItemType>,
    totalCount: number
  }
}

//второй контейнер для отправки запросов
class UsersApi extends Component<UsersApiPropsType> {

  componentDidMount(): void {
    this.props.setToggleIsFetching(true);
    if (this.props.users.length === 0) {
      const axios = require('axios');
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {withCredentials: true})
        .then((response: ResponseType) => {
          this.props.setToggleIsFetching(false);
          this.props.setUsers(response.data.items);
          this.props.setTotalUsersCount(response.data.totalCount);
        });
    }
  }

  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber);
    this.props.setToggleIsFetching(true);
    const axios = require('axios');
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
        withCredentials: true})
      .then((response: ResponseType) => {
        this.props.setToggleIsFetching(false);
        this.props.setUsers(response.data.items);
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
  };
};

//контейнер, в котором лежит bll
export const UsersContainer = connect(mapStateToProps,
  {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setToggleIsFetching})(UsersApi)