import {ActionsTypes, DialogsPageType} from '../types/Types';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

const initialState = {
  dialogsData: [
    {id: 1, name: 'User One', userPhoto: 'https://freesvg.org/img/abstract-user-flat-1.png'},
    {id: 2, name: 'User Two', userPhoto: 'https://freesvg.org/img/abstract-user-flat-1.png'},
    {id: 3, name: 'User Three', userPhoto: 'https://freesvg.org/img/abstract-user-flat-1.png'},
    {id: 4, name: 'User Four', userPhoto: 'https://freesvg.org/img/abstract-user-flat-1.png'},
    {id: 5, name: 'User Five', userPhoto: 'https://freesvg.org/img/abstract-user-flat-1.png'},
    {id: 6, name: 'User Six', userPhoto: 'https://freesvg.org/img/abstract-user-flat-1.png'}
  ],
  messageData: [
    {id: 1, message: 'I\'m calling today about a bill that I never received.', status: 'sender'},
    {id: 2, message: 'Can you tell me which credit card it was for?', status: 'recipient'},
    {id: 3, message: 'It was for my Master Card.', status: 'sender'},
    {id: 4, message: 'You should\'ve gotten that bill two weeks ago.', status: 'recipient'},
    {id: 5, message: 'I haven\'t got it in the mail yet.', status: 'sender'},
    {id: 6, message: 'The computer is showing that all bills have been mailed.', status: 'recipient'},
    {id: 7, message: 'typing...', status: 'sender'},
  ],
  newMessageBody: '',
}

const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsTypes) => {
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