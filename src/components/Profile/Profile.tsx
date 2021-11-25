import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ActionsTypes, ProfilePageType} from '../../types/Types';


type ProfilePropsType = {
  state: ProfilePageType
  dispatch: (action: ActionsTypes) => void
}

const Profile: React.FC<ProfilePropsType> = ({state, dispatch}) => {

  return (
    <div>
      <ProfileInfo/>
      <MyPosts
        posts={state.posts}
        newPostText={state.newPostText}
        dispatch={dispatch}
      />
    </div>
  );
};

export default Profile;