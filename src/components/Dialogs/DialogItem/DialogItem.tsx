import React from 'react';
import styles from '../Dialogs.module.scss';
import {NavLink} from 'react-router-dom';

type DialogPropsType = {
  name: string
  id: number
}

const DialogItem = (props: DialogPropsType) => {

  let path = `/dialogs/${props.id}`;

  return (
    <div className={styles.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;