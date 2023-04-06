import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message';


// const array = [7, 4, 1, 3, 5, 12, 11, 6, 2, 6]
// const selectionSort = (a) => {
//   for (let i = 0; i < a.length; i++) {
//     let indexMin = i
//     for (let j = i + 1; j < a.length; j++) {
//       if (a[j] < a[indexMin]) {
//         indexMin = j
//       }
//     }
//     let tmp = a[i]
//     a[i] = a[indexMin]
//     a[indexMin] = tmp
//   }
//   return a
// }
// console.log(selectionSort(array))

// const arr = [7, 4, 1, 3, 5, 12, 11, 6, 2, 6]
// let count = 0
// const bubbleSort = (a) => {
//   for (let i = 0; i < a.length; i++) {
//     for (let j = 0; j < a.length; j++) {
//       if (a[j + 1] < a[j]) {
//         let tmp = a[j]
//         a[j] = a[j + 1]
//         a[j + 1] = tmp
//       }
//       count += 1
//     }
//   }
//   return a
// }

// console.log(bubbleSort(arr))
// console.log('count = ', count)

const Dialogs = (props) => {

  let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
  let messagesElement = props.state.messages.map(m => <Message message={m.message} />)

  let newMessage = React.createRef()
  let textAlert = () => {
    let text = newMessage.current.value
    alert(text)
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElement}
      </div>
      <div>
        <textarea placeholder="Write some to alert" ref={newMessage}></textarea>
      </div>
      <div>
        <button onClick={textAlert}>Add text</button>
      </div>
    </div>
  )
}


export default Dialogs;