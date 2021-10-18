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
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <Dialog id={1} name='User 1'/>
        <Dialog id={2} name='User 2'/>
        <Dialog id={3} name='User 3'/>
        <Dialog id={4} name='User 4'/>
        <Dialog id={5} name='User 5'/>
      </div>
      <div className={s.messages}>
        <Message message='Hello, how are you?'/>
        <Message message='Tomorrow at 9.'/>
        <Message message='Have a nice day!'/>
      </div>
    </div>
  );
};

export default Dialogs;