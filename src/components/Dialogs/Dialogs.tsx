import React from 'react';
import styles from './Dialogs.module.scss';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DialogsDataType, MessageDataType} from '../../index';

type DialogsPropsType = {
  dialogsData: DialogsDataType
  messageData: MessageDataType
}

const Dialogs: React.FC<DialogsPropsType> = ({dialogsData, messageData}) => {

  const dialogsItem = dialogsData.map(d => <DialogItem id={d.id} name={d.name}/>);
  const messagesItem = messageData.map(m => <Message message={m.message}/>);

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        {dialogsItem}
      </div>
      <div className={styles.messages}>
        {messagesItem}
      </div>
    </div>
  );
};

export default Dialogs;