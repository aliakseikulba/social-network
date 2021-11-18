import {ActionsTypes, DialogsPageType} from './state';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE= 'SEND_MESSAGE';

const dialogsReducer = (state:DialogsPageType, action:ActionsTypes) => {
    if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      state.newMessageBody = action.body;
    } else if (action.type === SEND_MESSAGE) {
      let body = state.newMessageBody;
      state.newMessageBody = '';
      state.messageData.push({id: 8, message: body, status: 'sender'});
    }

  return state;
};

export default dialogsReducer;