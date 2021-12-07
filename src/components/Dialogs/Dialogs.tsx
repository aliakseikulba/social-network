import React, {ChangeEvent} from 'react';
import styles from './Dialogs.module.scss';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DialogsPropsType} from './DialogsContainer';


const Dialogs: React.FC<DialogsPropsType> = ({dialogsPage, sendMessage, updateNewMessageBody}) => {
  const state = dialogsPage;

  const dialogsItem = state.dialogsData
    .map((d: any) => <DialogItem key={d.id} id={d.id} name={d.name} userPhoto={d.userPhoto}/>);
  const messagesItem = state.messageData
    .map((m: any) => <Message key={m.id} message={m.message} status={m.status}/>);
  const newMessageBody = state.newMessageBody;

  const onSendMessageClick = () => {
    sendMessage();
  };

  const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const body = e.currentTarget.value;
    updateNewMessageBody(body);
  };

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
                  placeholder="enter your message"
                  className={styles.messageTextarea}
        />
        <button className={styles.messageButton}
                onClick={onSendMessageClick}>send
        </button>
      </div>
    </>
  );
};

export default Dialogs;