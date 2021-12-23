import React, {Component} from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {setAuthUserData} from '../../redux/authReducer';
import {AppStateType} from '../../redux/reduxStore';

export class HeaderContainer extends Component<HeaderContainerPropsType> {

  componentDidMount() {
    const axios = require('axios');
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      withCredentials: true
    })
      .then((response: { data: { resultCode: number; data: { id: any; email: any; login: any; }; }; }) => {
        if (response.data.resultCode === 0) {
          let {id, email, login} = response.data.data;
          this.props.setAuthUserData(id, email, login);
          console.log(id, email, login);
        }
      });
  }

  render() {
    return (
      <>
        <Header {...this.props}/>
      </>
    );
  }
}

type MapStateToPropsType = {
  isAuth: boolean
  login: string
}
type MapDispatchToPropsType = {
  setAuthUserData: (id: number, email: string, login: string) => void
}

export type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppStateType) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export const HeaderConnect = connect(mapStateToProps, {setAuthUserData})(HeaderContainer);