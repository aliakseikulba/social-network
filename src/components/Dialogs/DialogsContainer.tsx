import React from 'react';
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from '../../redux/dialogsReducer';
import {Store} from 'redux';
import Dialogs from './Dialogs';
import {StoreContext} from '../../StoreContext';


// type DialogsContainerPropsType = {
//   store: Store
// }

const DialogsContainer: React.FC = () => {

  return <StoreContext.Consumer>
    {
      (store) => {

        const onSendMessageClick = () => {
          store.dispatch(sendMessageActionCreator());
        };

        const onNewMessageChange = (body: string) => {
          store.dispatch(updateNewMessageBodyActionCreator(body));
        };

        return <Dialogs dialogsPage={store.getState().dialogsPage}
                        sendMessage={onSendMessageClick}
                        updateNewMessageBody={onNewMessageChange}/>;
      }
    }
  </StoreContext.Consumer>;
};

export default DialogsContainer;