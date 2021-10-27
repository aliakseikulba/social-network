import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {PostsType, ProfilePageType} from '../../redux/state';


type ProfilePropsType = {
  state: ProfilePageType
}

const Profile: React.FC<ProfilePropsType> = ({state}) => {

  return (
    <div>
      <ProfileInfo/>
      <MyPosts posts={state.posts}/>
    </div>
  );
};

export default Profile;