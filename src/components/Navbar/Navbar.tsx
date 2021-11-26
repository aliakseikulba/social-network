import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Navbar.module.scss';
import Friends from '../Friends/Friends';
import {SidebarType} from '../../types/types';

type NavbarPropsType = {
  state: SidebarType
}

const Navbar: React.FC<NavbarPropsType> = ({state}) => {

  const activeLinkClass = ({isActive}: { isActive: boolean }) => isActive ? styles.activeLink : '';

  return (
    <div className={styles.wrapper}>
      <nav className={styles.nav}>
        <div className={styles.item}>
          <NavLink to="/profile" className={activeLinkClass}>Profile</NavLink>
        </div>
        <div className={styles.item}>
          <NavLink to="/dialogs" className={activeLinkClass}>Messages</NavLink>
        </div>
        <div className={styles.item}>
          <NavLink to="/news" className={activeLinkClass}>News</NavLink>
        </div>
        <div className={styles.item}>
          <NavLink to="/music" className={activeLinkClass}>Music</NavLink>
        </div>
        <div className={styles.item}>
          <NavLink to="/settings" className={activeLinkClass}>Settings</NavLink>
        </div>
      </nav>
      <Friends state={state}/>
    </div>
  );
};

export default Navbar;