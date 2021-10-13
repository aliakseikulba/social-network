import React from 'react';
import styles from './Profile.module.scss';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div className={styles.content}>
      <div>
        <img src="https://bernardmarr.com/img/30%20Real%20Examples%20Of%20Blockchain%20Technology%20In%20Practice.png"
             alt="content logo"/>
      </div>
      <div>
        ava + description
      </div>
      <MyPosts/>
    </div>
  );
};

export default Profile;