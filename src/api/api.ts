import {UserItemType} from '../redux/usersReducer';

type GetUsersResponseType = {
  data: GetUsersDataType
}
export type GetUsersDataType = {
  items: Array<UserItemType>,
  totalCount: number
}

const axios = require('axios');

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'c0d492aa-215c-461c-a09c-fc3a5c38f627'
  },
  withCredentials: true,
});

export const usersApi = {

  getUsers(currentPage: number = 1, pageSize: number = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`,
      {
        withCredentials: true
      }).then((response: GetUsersResponseType) => response.data);
  }

};