import React from 'react';
import {UsersPropsType} from './UsersContainer';
import s from './Users.module.scss';
import axios from 'axios';
import {UserItemType} from '../../redux/usersReducer';

type DataType = {
  items: Array<UserItemType>
}

const Users: React.FC<UsersPropsType> = (props) => {

  if (props.users.length === 0) {
    axios.get<DataType>('https://social-network.samuraijs.com/api/1.0/users')
      .then(response => {
        console.log('response', response);
        props.setUsers(response.data.items);
      });
  }

  return (
    <div>
      {
        props.users.map(u =>
          <div key={u.id} className={s.userWrapper}>
            <div className={s.userView}>
              <div><img src={u.photoURL} alt="userPhoto" className={s.userPhoto}/></div>
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