import React, {Component} from 'react';
import s from './Users.module.scss';
import userPhoto from '../../assets/images/user.png';
import {UserItemType} from '../../redux/usersReducer';
import {UsersPropsType} from './UsersContainer';
import axios from 'axios';


type ResponseType = {
  data: {
    items: Array<UserItemType>,
    totalCount: number
  }
}

export class Users extends Component<UsersPropsType> {

  componentDidMount(): void {
    if (this.props.users.length === 0) {
      const axios = require('axios');
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then((response: ResponseType) => {
          this.props.setUsers(response.data.items);
          this.props.setTotalUsersCount(response.data.totalCount)
        });
    }
  }

  onPAgeChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then((response: ResponseType) => {
        this.props.setUsers(response.data.items);
      });
  }


  render() {

    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize) / 200;

    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    // const pagesForRender = pages.slice(this.props.currentPage-1, this.props.currentPage + 10 )

    return (
      <div>
        <div className={s.pageNum}>
          {pages.map((p, i) => {
              return <span key={`${i} + 'key'`}
                           className={this.props.currentPage === p ? s.selectedPage : ''}
                           onClick={() => {this.onPAgeChanged(p)}}>
                {p}
              </span>;
            }
          )}
        </div>
        {
          this.props.users.map((u: UserItemType) =>
            <div key={u.id} className={s.userWrapper}>
              <div className={s.userView}>
                <div><img
                  src={u.photos.small !== null ? u.photos.small : userPhoto}
                  alt="userPhoto"
                  className={s.userPhoto}/></div>
                <div>
                  {u.followed
                    ? <button onClick={() => {
                      this.props.unfollow(u.id);
                    }}>Unfollow</button>
                    : <button onClick={() => {
                      this.props.follow(u.id);
                    }}>Follow</button>}
                </div>
              </div>
              <div className={s.userContent}>
                <div className={s.userData}>
                  <div>{u.name}</div>
                  <div>{u.status}</div>
                </div>
                <div className={s.userAddress}>
                  <div>City,</div>
                  <div>Country</div>
                </div>
              </div>
            </div>)
        }
      </div>
    );
  }
}