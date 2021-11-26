import React from 'react';
import styles from './Friends.module.scss';
import {SidebarType} from '../../types/types';

type FriendsPropsType = {
  state: SidebarType
}

const Friends: React.FC<FriendsPropsType> = ({state}) => {

  const friendItemRender = state.friendsData.map(f => {
    return <div className={styles.friendItem}>
      <div className={styles.friendPhoto}>
        <img src={f.friendPhoto}/>
      </div>
      <div className={styles.friendName}>{f.name} {f.surname}</div>
    </div>;
  });

  return (
      <div className={styles.friendsBlock}>
        <div className={styles.friendsBlockTitle}>Friends</div>
        <div className={styles.friendsData}>
          {friendItemRender}
        </div>
      </div>
  );
};

export default Friends;