import React from 'react';
import {UsersPropsType} from './UsersContainer';
import s from './Users.module.scss';
import {UserItemType} from '../../redux/usersReducer';
import userPhoto from '../../assets/images/user.png';


type ResponseType = {
  data: {
    items: Array<UserItemType>
  }
}

const Users: React.FC<UsersPropsType> = (props) => {

  const getUsers = (): void => {
    if (props.users.length === 0) {
      const axios = require('axios');
      axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then((response: ResponseType) => {
          props.setUsers(response.data.items);
        });
    }
  };


  return (
    <div>
      <button onClick={getUsers}>get users</button>
      {
        props.users.map(u =>
          <div key={u.id} className={s.userWrapper}>
            <div className={s.userView}>
              <div><img
                src={u.photos.small !== null ? u.photos.small : userPhoto}
                alt="userPhoto"
                className={s.userPhoto}/></div>
              <div>
                {u.followed
                  ? <button onClick={() => {
                    props.unfollow(u.id);
                  }}>Unfollow</button>
                  : <button onClick={() => {
                    props.follow(u.id);
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

export {Users};