import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {Store} from 'redux';


type ProfilePropsType = {
  // store: Store
}

const Profile: React.FC<ProfilePropsType> = () => {

  return (
    <div>
      <ProfileInfo/>
      <MyPostsContainer />
    </div>
  );
};

export default Profile;