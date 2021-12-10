import React, {Component} from 'react';
import s from './Users.module.scss';
import userPhoto from '../../assets/images/user.png';
import {UserItemType} from '../../redux/usersReducer';
import {UsersPropsType} from './UsersContainer';


type ResponseType = {
  data: {
    items: Array<UserItemType>
  }
}

export class Users extends Component<UsersPropsType> {

  constructor(props: UsersPropsType) {
    super(props);

    if (this.props.users.length === 0) {
      const axios = require('axios');
      axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then((response: ResponseType) => {
          this.props.setUsers(response.data.items);
        });
    }
  }


  render() {
    return (
      <div>
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