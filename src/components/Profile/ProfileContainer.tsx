import React, {Component} from 'react';
import Profile from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/reduxStore';
import {ProfileType, setUserProfile} from '../../redux/profileReducer';

// container component with request
class ProfileContainer extends Component<ProfilePropsType> {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then((response) => {
        this.props.setUserProfile(response.data)
      });
  }

  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile}/>
      </div>
    );
  };
}


// container component
type MapStateToPropsType= {
  profile: ProfileType
}
type MapDispatchToPropsType = {
  setUserProfile: (profile: ProfileType) => void
}

export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType  => {
  return {
    profile: state.profilePage.profile
  }
}

export const ProfileMainContainer =  connect(mapStateToProps, {setUserProfile})(ProfileContainer)