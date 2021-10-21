import React from 'react';
import styles from '../Dialogs.module.scss';
import {MessageDataItemType} from '../../../index';

type MessageType = MessageDataItemType;

const Message = (props: MessageType) => {
  return (
    <div className={styles.message}>{props.message}</div>
  );
};

export default Message;