import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.title}>Social Network</div>
    </header>
  );
};

export default Header;