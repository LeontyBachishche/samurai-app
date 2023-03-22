import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'

const DialogItem = (props) => {
  return (
    <div className={s.dialog}>
      <NavLink to={'/dialogs/' + props.id} className={dataRandom => dataRandom.isActive ? s.active : s.dialog}>{props.name}</NavLink>
    </div>
  )
}

const Message = (props) => {
  return (
    <div className={s.dialog}>
      {props.message}
    </div>
  )
}

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name='Dima' id='1' />
        <DialogItem name='Alex' id='2' />
        <DialogItem name='Saha' id='3' />
        <DialogItem name='Bob' id='4' />
        <DialogItem name='Tom' id='5' />
        <DialogItem name='Maria' id='6' />
      </div>
      <div className={s.messages}>
        <Message message='Hello' />
        <Message message='How are you?' />
        <Message message='What you name?' />
        <Message message='What you name?' />
        <Message message='What you name?' />
      </div>
    </div>
  )
}

export default Dialogs;