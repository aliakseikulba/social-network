
import {ActionsTypes, DialogsPageType} from '../types/Types';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

const dialogsReducer = (state: DialogsPageType, action: ActionsTypes) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = '';
      state.messageData.push({id: 8, message: body, status: 'sender'});
      return state;
    default:
      return state;
  }
};

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE} as const);
export const updateNewMessageBodyActionCreator = (text: string) =>
  ({type: UPDATE_NEW_MESSAGE_BODY, body: text} as const);

export default dialogsReducer;