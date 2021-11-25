import {addPostActionCreator, UpdateNewPostTextActionCreator} from '../redux/profileReducer';
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from '../redux/dialogsReducer';

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
export type DialogsPageType = {
  dialogsData: DialogsDataType
  messageData: MessageDataType
  newMessageBody: string
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
  dialogsPage: DialogsPageType
  sideBar: SidebarType
}
export type ActionsTypes =
  ReturnType<typeof addPostActionCreator> | ReturnType<typeof UpdateNewPostTextActionCreator> |
  ReturnType<typeof sendMessageActionCreator> | ReturnType<typeof updateNewMessageBodyActionCreator>;
export type StoreType = {
  _state: StateType
  _onChange: () => void
  subscribe: (observer: () => void) => void
  getState: () => StateType
  dispatch: (action: ActionsTypes) => void
}