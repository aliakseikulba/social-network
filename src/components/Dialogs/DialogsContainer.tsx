import React from 'react';
import {
  DialogsPageInitialStateType,
  sendMessageActionCreator,
  updateNewMessageBodyActionCreator
} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/reduxStore';
import {Dispatch} from 'redux';


type MapStateToPropsType = {
  dialogsPage: DialogsPageInitialStateType
}
type MapDispatchToPropsType = {
  updateNewMessageBody: (body: string) => void
  sendMessage: () => void
}
export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType;


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    dialogsPage: state.dialogsPage
  }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    updateNewMessageBody: (body: string) => {
      dispatch(updateNewMessageBodyActionCreator(body))
    },
    sendMessage: () => {
      dispatch(sendMessageActionCreator())
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;