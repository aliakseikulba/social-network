import React from 'react';
import s from './Users.module.scss';
import userPhoto from '../../assets/images/user.png';
import {UserItemType} from '../../redux/usersReducer';
import {NavLink} from 'react-router-dom';
import axios from 'axios';


type UsersPropsType = {
  users: Array<UserItemType>
  totalUsersCount: number
  pageSize: number
  currentPage: number
  onPageChanged: (pageNum: number) => void
  unfollow: (userID: number) => void
  follow: (userID: number) => void
}

export const Users: React.FC<UsersPropsType> = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize) / 200;

  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div className={s.pageNum}>
        {pages.map((p, i) => {
            return <span key={`${i} + 'key'`}
                         className={props.currentPage === p ? s.selectedPage : ''}
                         onClick={() => {
                           props.onPageChanged(p);
                         }}>
                {p}
              </span>;
          }
        )}
      </div>
      {
        props.users.map((u: UserItemType) =>
          <div key={u.id} className={s.userWrapper}>
            <div className={s.userView}>
              <NavLink to={'/profile/' + u.id}>
                <div><img
                  src={u.photos.small !== null ? u.photos.small : userPhoto}
                  alt="userPhoto"
                  className={s.userPhoto}/></div>
              </NavLink>
              <div>
                {u.followed
                  ? <button onClick={() => {

                    const axios = require('axios');
                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                      withCredentials: true,
                      headers: {
                        'API-KEY': 'c0d492aa-215c-461c-a09c-fc3a5c38f627'
                      }
                    }).then((response: { data: { resultCode: number; }; }) => {
                      if (response.data.resultCode === 0) {
                        props.unfollow(u.id);
                      }
                    })

                  }}>Unfollow</button>
                  : <button onClick={() => {

                    const axios = require('axios');
                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                      withCredentials: true,
                      headers: {
                        'API-KEY': 'c0d492aa-215c-461c-a09c-fc3a5c38f627'
                      }
                    }).then((response: { data: { resultCode: number; }; }) => {
                      if (response.data.resultCode === 0) {
                        props.follow(u.id);
                      }
                    })

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
};