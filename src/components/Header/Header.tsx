import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src="https://www.logo.wine/a/logo/Ethereum/Ethereum-Icon-Purple-Logo.wine.svg" alt="logo"/>
    </header>
  );
};

export default Header;