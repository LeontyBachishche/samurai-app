import React from "react";
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

  let postsData = [
    { id: 1, message: 'First Post', likeCount: '23' },
    { id: 1, message: 'It\'s second Post', likeCount: '11' }
  ]

  let postsElement = postsData.map(p => <Post message={p.message} like={p.likeCount} />)

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
        {postsElement}
      </div>
    </div>
  )
}

export default MyPosts;
