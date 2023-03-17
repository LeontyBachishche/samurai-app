import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://fashion-stickers.ru/35322-thickbox_default/sobaka.jpg' alt="ramdom text" />
      {props.message}
    </div>
  )
}

export default Post;
