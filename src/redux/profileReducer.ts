export type PostItemType = {
  id?: number
  message: string
  likesCount: number
}
export type ProfilePageStateType = typeof initialState;
type ActionsType = ReturnType<typeof addPostActionCreator>
  | ReturnType<typeof updateNewPostTextActionCreator>
  | ReturnType<typeof setUserProfile>;

export type ProfileType = {
  aboutMe: string
  contacts: {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
  }
  lookingForAJob: boolean,
  lookingForAJobDescription: string,
  fullName: string,
  userId: string,
  photos: {
    small: string,
    large: string,
  }
}

const initialState = {
  posts: [
    {id: 1, message: 'Hi, how are you?', likesCount: 2},
    {id: 2, message: 'It\'s my first post', likesCount: 5},
  ] as Array<PostItemType>,
  newPostText: '',
  profile: {} as ProfileType
};

const profileReducer = (state: ProfilePageStateType = initialState, action: ActionsType):
  ProfilePageStateType => {

  switch (action.type) {

    case 'ADD_POST': {
      const newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0
      };
      return {...state, posts: [...state.posts, newPost], newPostText: ''};
    }

    case 'UPDATE-NEW-POST-TEXT': {
      return {...state, newPostText: action.newText};
    }

    case 'SET-USER-PROFILE': {
      return {...state, profile: action.profile}
    }

    default:
      return state;
  }
};

export const addPostActionCreator = () => ({type: 'ADD_POST'} as const);
export const updateNewPostTextActionCreator = (text: string) =>
  ({type: 'UPDATE-NEW-POST-TEXT', newText: text} as const);
export const setUserProfile = (profile: ProfileType) => ({type: 'SET-USER-PROFILE', profile} as const);

export {profileReducer};