import React from 'react';
import styles from '../Dialogs.module.scss';
import {MessageDataItemType} from '../../../redux/dialogsReducer';

const Message: React.FC<MessageDataItemType> = ({message, status}) => {

  return (
    <div className={`${styles.message} ${styles[status]}`}>
      <span>{message}</span>
    </div>
  );
};

export default Message;