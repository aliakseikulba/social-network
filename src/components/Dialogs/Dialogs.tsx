import React from 'react';
import styles from './Dialogs.module.scss';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = () => {

  const dialogsData = [
    {id: 1, name: 'User One'},
    {id: 2, name: 'User Two'},
    {id: 3, name: 'User Three'},
    {id: 4, name: 'User Four'},
    {id: 5, name: 'User Five'},
    {id: 6, name: 'User Six'}
  ];

  const messageData = [
    {id: 1, message: 'Hello, how it\'s going?'},
    {id: 2, message: 'Tomorrow at 9.'},
    {id: 3, message: 'Have a nice day!'}
  ];

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