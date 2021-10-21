import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {PostsType} from '../../index';

type ProfilePropsType = {
  posts: PostsType
}

const Profile = ({posts}: ProfilePropsType) => {

  return (
    <div>
      <ProfileInfo/>
      <MyPosts posts={posts}/>
    </div>
  );
};

export default Profile;