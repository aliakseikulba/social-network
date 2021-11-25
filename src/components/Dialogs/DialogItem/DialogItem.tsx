import React from 'react';
import styles from '../Dialogs.module.scss';
import {NavLink} from 'react-router-dom';
import {DialogsDataItemType} from '../../../types/Types';


const DialogItem: React.FC<DialogsDataItemType> = ({id,name, userPhoto}) => {

  let path = `/dialogs/${id}`;

  return (
    <div className={styles.dialog}>
      <img src={userPhoto}/>
      <NavLink to={path}>{name}</NavLink>
    </div>
  );
};

export default DialogItem;