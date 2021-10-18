import React from 'react';
import s from './ProfileInfo.module.scss';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://bernardmarr.com/img/30%20Real%20Examples%20Of%20Blockchain%20Technology%20In%20Practice.png"/>
      </div>
      <div className={s.descriptionBlock}>
        ava + description
      </div>
    </div>
  );
};

export default ProfileInfo;