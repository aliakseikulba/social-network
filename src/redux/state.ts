export type PostItemType = {
  id?: number
  message: string
  likesCount: number
}
export type PostsType = Array<PostItemType>
export type DialogsDataItemType = {
  id: number
  name: string
  userPhoto: string
}
export type DialogsDataType = Array<DialogsDataItemType>
export type MessageDataItemType = {
  id?: number
  message: string
  status: string
}
export type MessageDataType = Array<MessageDataItemType>
export type ProfilePageType = {
  posts: PostsType
  newPostText: string
}
export type MessagesPageType = {
  dialogsData: DialogsDataType
  messageData: MessageDataType
}
export type SidebarType = {
  friendsData: FriendsDataType
}
export type FriendsDataType = FriendItemType[];
export type FriendItemType = {
  id: number
  name: string
  surname: string
  friendPhoto: string
}
export type StateType = {
  profilePage: ProfilePageType
  messagesPage: MessagesPageType
  sideBar: SidebarType
}
export type ActionsTypes =
  ReturnType<typeof addPostActionCreator> | ReturnType<typeof UpdateNewPostTextActionCreator>;
export type StoreType = {
  _state: StateType
  _onChange: () => void
  subscribe: (observer: () => void) => void
  getState: () => StateType
  dispatch: (action: ActionsTypes) => void
}

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const store: StoreType = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 2},
        {id: 2, message: 'It\'s my first post', likesCount: 5},
      ],
      newPostText: ''
    },
    messagesPage: {
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
  _onChange() {
    console.log('state changed');
  },

  getState() {
    return this._state;
  },
  subscribe(observer: () => void) {
    this._onChange = observer;
  },
  dispatch(action) {
    if (action.type === ADD_POST) {
      const newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._onChange();
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._onChange();
    }
  },
};

export const addPostActionCreator = () => ({type: ADD_POST} as const);
export const UpdateNewPostTextActionCreator = (text: string) =>
  ({type: UPDATE_NEW_POST_TEXT, newText: text} as const);