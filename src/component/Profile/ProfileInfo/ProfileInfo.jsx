import React from "react";
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src='http://clipart-library.com/images/ATbreEAac.jpg' alt="ramdom text" />
      </div>
      <div className={s.descriptionBlock}>
        ava + description
      </div>
    </div>
  )
}

export default ProfileInfo;
