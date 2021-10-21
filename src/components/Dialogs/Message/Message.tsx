import React from 'react';
import styles from '../Dialogs.module.scss';
import {MessageDataItemType} from '../../../index';

const Message: React.FC<MessageDataItemType> = ({message}) => {
  return (
    <div className={styles.message}>{message}</div>
  );
};

export default Message;