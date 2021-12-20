import React from 'react';
import s from './ProfileInfo.module.scss';
import {Preloader} from '../../common/Preloader/Preloader';
import {ProfileType} from '../../../redux/profileReducer';

type ProfileInfoPropsType = {
  profile: ProfileType
}

const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {

  if (!props.profile) {
    return <Preloader/>
  }

  return (
    <div>
      <div className={s.descriptionBlock}>
        {props.profile.photos ?  <img className={s.photo} src={props.profile.photos.large}/> : null}
        <div className={s.status}>{props.profile.aboutMe}</div>
      </div>
    </div>
  );
};

export default ProfileInfo;