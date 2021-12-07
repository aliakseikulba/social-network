import React from 'react';
import {UsersPropsType} from './UsersContainer';
import s from './Users.module.scss'

const Users: React.FC<UsersPropsType> = (props) => {
  return (
    <div>
      {
        props.users.map(u =>
          <div key={u.id}>
            <div>
              <div><img src={u.photoURL} alt="userPhoto" className={s.userPhoto}/></div>
              <div>
                {u.followed
                  ? <button onClick={() => {props.unfollow(u.id)} }>Unfollow</button>
                    : <button onClick={() => {props.follow(u.id)} }>Follow</button>}
              </div>
            </div>
            <div>
              <div>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </div>
              <div>{u.location.country}, {u.location.city}</div>
            </div>
          </div>)
      }
    </div>
  );
};

export {Users};