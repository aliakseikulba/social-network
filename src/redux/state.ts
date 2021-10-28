import {rerenderEntireTree} from '../render';

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

const state = {
  profilePage: {
    posts: [
      {id: 1, message: 'Hi, how are you?', likesCount: 2},
      {id: 2, message: 'It\'s my first post', likesCount: 5},
    ],
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
};

export const addPost = (post: string) => {

  const newPost = {
    id: 5,
    message: post,
    likesCount: 0
  };
  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
};

export default state;