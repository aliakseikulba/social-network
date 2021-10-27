export type PostItemType = {
  id?: number
  message: string
  likesCount: number
}

export type PostsType = Array<PostItemType>

export type DialogsDataItemType = {
  id: number
  name: string
}

export type DialogsDataType = Array<DialogsDataItemType>

export type MessageDataItemType = {
  id?: number
  message: string
}

export type MessageDataType = Array<MessageDataItemType>

export type ProfilePageType = {
  posts: PostsType
}

export type MessagesPageType = {
  dialogsData: DialogsDataType
  messageData: MessageDataType
}

export type StateType = {
  profilePage: ProfilePageType
  messagesPage: MessagesPageType
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
      {id: 1, name: 'User One'},
      {id: 2, name: 'User Two'},
      {id: 3, name: 'User Three'},
      {id: 4, name: 'User Four'},
      {id: 5, name: 'User Five'},
      {id: 6, name: 'User Six'}
    ],
    messageData: [
      {id: 1, message: 'Hello, how it\'s going?'},
      {id: 2, message: 'Tomorrow at 9.'},
      {id: 3, message: 'Have a nice day!'}
    ],
  }
}

export default state;