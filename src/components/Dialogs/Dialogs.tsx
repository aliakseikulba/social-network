import React from 'react';
import styles from './Dialogs.module.scss';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {MessagesPageType} from '../../redux/state';


type DialogsPropsType = {
  state: MessagesPageType
}

const Dialogs: React.FC<DialogsPropsType> = ({state}) => {

  const dialogsItem = state.dialogsData
    .map(d => <DialogItem id={d.id} name={d.name} userPhoto={d.userPhoto}/>);
  const messagesItem = state.messageData.map(m => <Message message={m.message} status={m.status}/>);

  const newMessageElement = React.createRef<HTMLTextAreaElement>();

  const addMessage = () => {
    if (newMessageElement.current) {
      let message = newMessageElement.current.value;
      alert(message);
    }
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
        <textarea className={styles.messageTextarea} ref={newMessageElement}></textarea>
        <button className={styles.messageButton} onClick={addMessage}>send</button>
      </div>
    </>
  );
};

export default Dialogs;