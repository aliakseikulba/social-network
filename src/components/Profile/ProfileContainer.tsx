import React, {Component} from 'react';
import Profile from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/reduxStore';
import {ProfileType, setUserProfile} from '../../redux/profileReducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';


type MapStateToPropsType = {
  profile: ProfileType
}
type MapDispatchToPropsType = {
  setUserProfile: (profile: ProfileType) => void
}
type PathParamsType = {
  userId: string
}
type CommonPropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

// container component with request
class ProfileContainer extends Component<CommonPropsType> {

  componentDidMount() {

    let userId = this.props.match.params.userId;
    if (!userId) {userId = '1222';}

    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then((response) => {
        this.props.setUserProfile(response.data);
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
export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    profile: state.profilePage.profile
  };
};

let withURLDataContainerComponent = withRouter(ProfileContainer);

export const ProfileMainContainer = connect(mapStateToProps, {setUserProfile})(withURLDataContainerComponent);