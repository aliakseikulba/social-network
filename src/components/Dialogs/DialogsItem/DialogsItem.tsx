import React from 'react';
import s from '../Dialogs.module.scss';
import {NavLink} from 'react-router-dom';

type DialogPropsType = {
  name: string
  id: number
}

const DialogsItem = (props: DialogPropsType) => {

  let path = `/dialogs/${props.id}`;

  return (
    <div className={s.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default DialogsItem;