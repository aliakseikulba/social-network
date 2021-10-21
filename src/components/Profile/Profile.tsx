import React from 'react';
import styles from './Profile.module.scss';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

export type PostItemType = {
  id: number
  message: string
  likesCount: number
}

export type PostsType = PostItemType[]

const Profile = () => {

  const posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: 2},
    {id: 2, message: 'It\'s my first post', likesCount: 5},
  ];

  return (
    <div>
      <ProfileInfo/>
      <MyPosts data={posts}/>
    </div>
  );
};

export default Profile;