import React from 'react';
import styles from './Dialogs.module.scss';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {MessagesPageType} from '../../redux/state';


type DialogsPropsType = {
  state: MessagesPageType
}

const Dialogs: React.FC<DialogsPropsType> = ({state}) => {

  const dialogsItem = state.dialogsData.map(d => <DialogItem id={d.id} name={d.name}/>);
  const messagesItem = state.messageData.map(m => <Message message={m.message}/>);

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