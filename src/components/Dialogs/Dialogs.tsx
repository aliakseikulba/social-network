import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.scss';

type DialogPropsType = {
  name: string
  id: number
}

const Dialog = (props: DialogPropsType) => {

  let path = `/dialogs/${props.id}`;

  return (
    <div className={s.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

type MessageType = {
  message: string
}

const Message = (props: MessageType) => {
  return (
    <div className={s.message}>{props.message}</div>
  );
};

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

  const dialogsItem = dialogsData.map(d => <Dialog id={d.id} name={d.name}/>);
  const messagesItem = messageData.map(m => <Message message={m.message}/>);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsItem}
      </div>
      <div className={s.messages}>
        {messagesItem}
      </div>
    </div>
  );
};

export default Dialogs;