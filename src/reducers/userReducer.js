import { SET_SELECTED_USER,GET_SELECTED_USER, DELETE_SELECTED_USER } from "../types";


export default (state = 
  {
      owner: {
        username: "Harold Cooper",
        profile_link: "/person1.svg",
        taggedPeople: []
      },
      selectedUsers: [],
      users:[
      {id:1, username:"Kathryn Simmmons",profile_link:"/user1.svg",tag:true},
      {id:2, username:"Arlene Simmmons",profile_link:"/user2.svg", tag:true},
      {id:3, username:"Harold Flores",profile_link:"/user3.svg", tag:true},
      {id:4, username:"Max Steward",profile_link:"/user4.svg", tag: true},
      {id:5, username:"Simon Bro",profile_link:"/user5.svg", tag: true},
      {id:6, username:"Alvee",profile_link:"/user6.svg", tag: true},
      {id:7, username:"Rabbi Bro",profile_link:"/user7.svg", tag: true},
      {id:8, username:"Sanni",profile_link:"/user8.svg", tag: true},
      {id:9, username:"Ghost Killer",profile_link:"/user6.svg", tag: false}
    ]

  }, action) => {
  switch (action.type) {

   case SET_SELECTED_USER:
      return {
        ...state,
        selectedUsers: [...state.selectedUsers, action.payload],
        users: state.users.filter(user => user.id !== action.payload.id)
      }
  
   case DELETE_SELECTED_USER:
     return {
       ...state,
        selectedUsers: state.selectedUsers.filter(user=> user.id !== action.payload.id),
        users: [...state.users, action.payload]
     }
  case "SEARCH":
    return{
      ...state,
      users: [...action.payload]
    }
  case "RESET_SEARCH":
    return{
      ...state,
      users: [
        ...state.users
      ]
    }

  case GET_SELECTED_USER:
    return{
      state
    }
   default:
    return state
  }
 }