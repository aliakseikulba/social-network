import {connect} from 'react-redux';

import {
  followAC,
  setCurrentPageAC, setTotalUsersCountAC,
  setUsersAC,
  unfollowAC,
  UserItemType
} from '../../redux/usersReducer';
import {AppStateType} from '../../redux/reduxStore';
import {Dispatch} from 'redux';
import React, {Component} from 'react';
import axios from 'axios';
import {Users} from './Users';


type MapStateToPropsType = {
  users: Array<UserItemType>
  pageSize: number
  totalUsersCount: number
  currentPage: number
}
type MapDispatchToPropsType = {
  follow: (userID: number) => void
  unfollow: (userId: number) => void
  setUsers: (users: Array<UserItemType>) => void
  setCurrentPage: (pageNumber: number) => void
  setTotalUsersCount: (totalCount: number) => void
}
export type UsersApiPropsType = MapStateToPropsType & MapDispatchToPropsType;
type ResponseType = {
  data: {
    items: Array<UserItemType>,
    totalCount: number
  }
}

class UsersApi extends Component<UsersApiPropsType> {

  componentDidMount(): void {
    if (this.props.users.length === 0) {
      const axios = require('axios');
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then((response: ResponseType) => {
          this.props.setUsers(response.data.items);
          this.props.setTotalUsersCount(response.data.totalCount);
        });
    }
  }

  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then((response: ResponseType) => {
        this.props.setUsers(response.data.items);
      });
  };


  render() {

    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize) / 200;

    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    // const pagesForRender = pages.slice(this.props.currentPage-1, this.props.currentPage + 10 )

    return (
      <Users users={this.props.users}
             totalUsersCount={this.props.totalUsersCount}
             pageSize={this.props.pageSize}
             currentPage={this.props.currentPage}
             onPageChanged={this.onPageChanged}
             unfollow={this.props.unfollow}
             follow={this.props.follow}
      />
    );
  }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
  };
};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    follow: (userID: number) => {
      dispatch(followAC(userID));
    },
    unfollow: (userID: number) => {
      dispatch(unfollowAC(userID));
    },
    setUsers: (users: Array<UserItemType>) => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber))
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setTotalUsersCountAC(totalCount))
    },
  };
};

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersApi);