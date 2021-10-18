import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.scss';

type DialogPropsType = {
  name: string
  id: number
}

const Dialog = (props: DialogPropsType) => {

  let path = `/dialogs/${props.id}`

  return (
    <div className={s.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

type MessageType = {
  message: string
}

const Message = (props: MessageType) => {
  return (
    <div className={s.message}>{props.message}</div>
  )
}

const Dialogs = () => {

  let dialogsData = [
    {id: 1, name: 'User One'},
    {id: 2, name: 'User Two'},
    {id: 3, name: 'User Three'},
    {id: 4, name: 'User Four'},
    {id: 5, name: 'User Five'},
    {id: 6, name: 'User Six'}
  ]

  let messageData = [
    {id: 1, message: 'Hello, how it\'s going?'},
    {id: 2, message: 'Tomorrow at 9.'},
    {id: 3, message: 'Have a nice day!'}
  ]

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <Dialog id={dialogsData[0].id} name={dialogsData[0].name}/>
        <Dialog id={dialogsData[1].id} name={dialogsData[1].name}/>
      </div>
      <div className={s.messages}>
        <Message message={messageData[0].message}/>
        <Message message={messageData[1].message}/>
        <Message message={messageData[2].message}/>
      </div>
    </div>
  );
};

export default Dialogs;