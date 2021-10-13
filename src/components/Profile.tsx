import React from 'react';
import styles from './Profile.module.scss';

const Profile = () => {
  return (
    <div className={styles.content}>
      <div>
        <img src="https://bernardmarr.com/img/30%20Real%20Examples%20Of%20Blockchain%20Technology%20In%20Practice.png" alt="content logo"/>
      </div>
      <div>
        ava + description
      </div>
      <div>
        My posts
        <div>New post</div>
      </div>
      <div className={styles.posts}>
        <div className={styles.item}>Post1</div>
        <div className={styles.item}>Post2</div>
      </div>
    </div>
  );
};

export default Profile;