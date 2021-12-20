import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ProfilePropsType} from './ProfileContainer';
import s from './Profile.module.scss'


const Profile: React.FC<ProfilePropsType> = (props) => {

  return (
    <div className={s.profileBlock}>
      <ProfileInfo profile={props.profile}/>
      <MyPostsContainer />
    </div>
  );
};

export default Profile;