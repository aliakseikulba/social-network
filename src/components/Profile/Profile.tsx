import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {PostsType, ProfilePageType} from '../../redux/state';


type ProfilePropsType = {
  state: ProfilePageType
  addPost: () => void
  updateNewPostText: (text: string) => void
}

const Profile: React.FC<ProfilePropsType> = ({state, addPost, updateNewPostText}) => {

  return (
    <div>
      <ProfileInfo/>
      <MyPosts
        posts={state.posts}
        newPostText={state.newPostText}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
        />
    </div>
  );
};

export default Profile;