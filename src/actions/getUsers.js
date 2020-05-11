import {
  SET_SELECTED_USER,
  GET_SELECTED_USER,
  DELETE_SELECTED_USER,
  SET_TAGS_TO_USER
} from '../types';

// export function getUsers() {
//   return {
//       type: GET_USERS
//   }
// }

export const setSelectedUser = (user)=>{
  return{
    type: SET_SELECTED_USER,
    payload: user
  }
}

export const deleteSelectedUser = (user)=>{
  return{
    type: DELETE_SELECTED_USER,
    payload: user
  }
}


export const getSelectedUser =()=>{
  return { 
    type: GET_SELECTED_USER
  }
}

export const setTagsToUser = () =>{
  return{
    type: SET_TAGS_TO_USER
  }
}

export const searchUser = (data)=>{
  return {
    type: "SEARCH",
    payload: data
  }
}