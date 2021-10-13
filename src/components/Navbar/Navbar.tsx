import React from 'react';
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.item}>
        <a>Profile</a>
      </div>
      <div className={`${styles.item} ${styles.active}`}>
        <a>Messages</a>
      </div>
      <div className={styles.item}>
        <a>News</a>
      </div>
      <div className={styles.item}>
        <a>Music</a>
      </div>
    </nav>
  );
};

export default Navbar;