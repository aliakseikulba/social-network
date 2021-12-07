import React from 'react';
import {UsersPropsType} from './UsersContainer';
import s from './Users.module.scss';

const Users: React.FC<UsersPropsType> = (props) => {

  if (props.users.length === 0) {
    props.setUsers([
      {
        id: '1',
        photoURL: 'https://freesvg.org/img/abstract-user-flat-1.png',
        followed: false,
        name: 'Nik',
        status: 'German Spy',
        location: {city: 'Berlin', country: 'Germany'}
      },
      {
        id: '2',
        photoURL: 'https://freesvg.org/img/abstract-user-flat-1.png',
        followed: false,
        name: 'Mike',
        status: 'Polish Spy',
        location: {city: 'Warsaw', country: 'Poland'}
      },
      {
        id: '3',
        photoURL: 'https://freesvg.org/img/abstract-user-flat-1.png',
        followed: true,
        name: 'Steeve',
        status: 'English Spy',
        location: {city: 'London', country: 'United Kingdom'}
      },
    ]);
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
                <div>{u.location.city},</div>
                <div>{u.location.country}</div>
              </div>
            </div>
          </div>)
      }
    </div>
  );
};

export {Users};