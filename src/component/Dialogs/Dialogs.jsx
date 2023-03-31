import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message';

  // let arr = [1, 4, 3, 5, 11, 6, 2, 6]
  // const bubble = () => {
  //   let len = arr.length
  //   while (len !== 0) {
  //     let max_index = 0
  //     for (let i = 1; i < len; i++) {
  //       if (arr[i - 1] > arr[i]) {
  //         let temp = arr[i - 1]
  //         arr[i - 1] = arr[i]
  //         arr[i] = temp
  //         max_index = i
  //       }
  //       console.log(arr)
  //     }
  //     len = max_index
  //   }
  // }
  // bubble(arr)

  // let array = [1,4,7,3,5,11,6,2,6]
  // const bubbleSort = () => {
  //   for (let i = 0, endI = array.length - 1; i < endI; i++) {
  //       for (let j = 0, endJ = endI - i; j < endJ; j++) {
  //           if (array[j] > array[j + 1]) {
  //               let swap = array[j];
  //               array[j] = array[j + 1];
  //               array[j + 1] = swap;
  //           }
  //       }
  //   }
  //   console.log(array)
  // }

  // bubbleSort(array)

  // let arr = [1,4,7,3,5,11,6,2,6]
  // const bubbleSort = () => {
  //   for (let i = 0, endI = arr.length - 1; i < endI; i++) {
  //       let wasSwap = false;
  //       for (let j = 0, endJ = endI - i; j < endJ; j++) {
  //           if (arr[j] > arr[j + 1]) {
  //               [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
  //               wasSwap = true;
  //           }
  //       }
  //       if (!wasSwap) break;
  //   }
  //   console.log(arr)
  // };
  // bubbleSort()

const Dialogs = () => {

  let dialogs = [
    { id: 1, name: 'Dima' },
    { id: 2, name: 'Alex' },
    { id: 3, name: 'Saha' },
    { id: 4, name: 'Bob' },
    { id: 5, name: 'Tom' },
    { id: 6, name: 'Maria' }
  ]

  let messages = [
    { id: 1, message: 'Hello' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: 'What you name?' },
    { id: 4, message: 'What you name?' }
  ]

  let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
  let messagesElement = messages.map(m => <Message message={m.message} />)

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElement}
      </div>
    </div>
  )
}

export default Dialogs;