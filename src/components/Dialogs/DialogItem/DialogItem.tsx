import React from 'react';
import styles from '../Dialogs.module.scss';
import {NavLink} from 'react-router-dom';
import {DialogsDataItemType} from '../../../index';

const DialogItem: React.FC<DialogsDataItemType> = ({id,name}) => {

  let path = `/dialogs/${id}`;

  return (
    <div className={styles.dialog}>
      <NavLink to={path}>{name}</NavLink>
    </div>
  );
};

export default DialogItem;