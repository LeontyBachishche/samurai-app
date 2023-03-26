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

  let dialogsData = [
    { id: 1, name: 'Dima' },
    { id: 2, name: 'Alex' },
    { id: 3, name: 'Saha' },
    { id: 4, name: 'Bob' },
    { id: 5, name: 'Tom' },
    { id: 6, name: 'Maria' }
  ]

  let messagesData = [
    { id: 1, message: 'Hello' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: 'What you name?' },
    { id: 4, message: 'What you name?' }
  ]

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
        <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
        <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />
      </div>
      <div className={s.messages}>
        <Message message={messagesData[0].message} />
        <Message message={messagesData[1].message} />
        <Message message={messagesData[2].message} />
        <Message message={messagesData[3].message} />
      </div>
    </div>
  )
}

export default Dialogs;