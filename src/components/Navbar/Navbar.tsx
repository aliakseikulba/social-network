import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Navbar.module.scss';
import {SidebarType} from '../../redux/state';

type NavbarPropsType = {
  state: SidebarType
}

const Navbar: React.FC<NavbarPropsType> = ({state}) => {

  const friendItemRender = state.friendsData.map(f => {
    return <div className={styles.friendItem}>
      <div className={styles.friendPhoto}>
        <img src="https://freesvg.org/img/abstract-user-flat-1.png"/>
      </div>
      <div className={styles.friendName}>{f.name} {f.surname}</div>
    </div>;
  });

  return (
    <div className={styles.wrapper}>
      <nav className={styles.nav}>
        <div className={styles.item}>
          <NavLink to="/profile" activeClassName={styles.activeLink}>Profile</NavLink>
        </div>
        <div className={styles.item}>
          <NavLink to="/dialogs" activeClassName={styles.activeLink}>Messages</NavLink>
        </div>
        <div className={styles.item}>
          <NavLink to="/news" activeClassName={styles.activeLink}>News</NavLink>
        </div>
        <div className={styles.item}>
          <NavLink to="/music" activeClassName={styles.activeLink}>Music</NavLink>
        </div>
        <div className={styles.item}>
          <NavLink to="/settings" activeClassName={styles.activeLink}>Settings</NavLink>
        </div>
      </nav>
      <div className={styles.friendsBlock}>
        <div className={styles.friendsBlockTitle}>Friends</div>
        <div className={styles.friendsData}>
          {friendItemRender}
        </div>
      </div>
    </div>
  );
};

export default Navbar;