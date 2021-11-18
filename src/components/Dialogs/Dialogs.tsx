import React, {ChangeEvent} from 'react';
import styles from './Dialogs.module.scss';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {
  sendMessageActionCreator,
  StoreType,
  updateNewMessageBodyActionCreator
} from '../../redux/state';


type DialogsPropsType = {
  store: StoreType
}

const Dialogs: React.FC<DialogsPropsType> = ({store}) => {

  const state = store.getState().messagesPage;

  const dialogsItem = state.dialogsData
    .map(d => <DialogItem id={d.id} name={d.name} userPhoto={d.userPhoto}/>);
  const messagesItem = state.messageData.map(m => <Message message={m.message} status={m.status}/>);
  const newMessageBody = state.newMessageBody;

  const onSendMessageClick = () => {
    store.dispatch(sendMessageActionCreator())
  }

  const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const body = e.currentTarget.value;
    store.dispatch(updateNewMessageBodyActionCreator(body))
  }

  return (
    <>
      <div className={styles.dialogs}>
        <div className={styles.dialogsItems}>
          {dialogsItem}
        </div>
        <div className={styles.messages}>
          {messagesItem}
        </div>
      </div>
      <div className={styles.addMessage}>
        <textarea value={newMessageBody}
                  onChange={onNewMessageChange}
                  placeholder='enter your message'
                  className={styles.messageTextarea}
        />
        <button className={styles.messageButton}
                onClick={onSendMessageClick}>send</button>
      </div>
    </>
  );
};

export default Dialogs;