import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.scss';

type HeaderPropsType = {
  isAuth: boolean
  login: string
}

const Header = (props: HeaderPropsType) => {
  return (
    <header className={s.header}>
      <div className={s.title}>Social Network</div>
      <div className={s.loginBlock}>
        {props.isAuth ? props.login
          : <NavLink to={'./login'}>Login</NavLink>
        }
      </div>
    </header>
  );
};

export default Header;