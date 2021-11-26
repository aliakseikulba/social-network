import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import sideBarReducer from './sideBarReducer';
import {StoreType} from '../types/types';


export const store: StoreType = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 2},
        {id: 2, message: 'It\'s my first post', likesCount: 5},
      ],
      newPostText: ''
    },
    dialogsPage: {
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
    },
    sideBar: {
      friendsData: [
        {
          id: 1, name: 'Name', surname: 'Surname',
          friendPhoto: 'https://freesvg.org/img/abstract-user-flat-1.png'
        },
        {
          id: 1, name: 'Name', surname: 'Surname',
          friendPhoto: 'https://freesvg.org/img/abstract-user-flat-1.png'
        },
        {
          id: 1, name: 'Name', surname: 'Surname',
          friendPhoto: 'https://freesvg.org/img/abstract-user-flat-1.png'
        },
      ]
    }
  },
  _callSubscriber() {
    console.log('state changed');
  },

  getState() {
    return this._state;
  },
  subscribe(observer: () => void) {
    this._callSubscriber = observer;
  },

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sideBar = sideBarReducer(this._state.sideBar, action);

    this._callSubscriber();
  }
};