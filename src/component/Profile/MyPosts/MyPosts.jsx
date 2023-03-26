import React from "react";
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

  let postData = [
    { id: 1, message: 'First Post', likeCount: '23' },
    { id: 1, message: 'It\'s second Post', likeCount: '11' }
  ]

  return (
    <div className={s.postBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        <Post m={postData[0].message} like={postData[0].likeCount} />
        <Post m={postData[1].message} like={postData[1].likeCount} />
      </div>
    </div>
  )
}

export default MyPosts;
