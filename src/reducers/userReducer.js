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
      {id:3, username:"Harold Flores",profile_link:"/user3.svg", tag:false},
      {id:4, username:"Max Steward",profile_link:"/user4.svg", tag: true}
    ]

  }, action) => {
  switch (action.type) {
  //  case SET_TAGS_TO_USER:
  //    console.log("Ranned")
  //     return {
  //       owner:{
  //         username: state.owner.username,
  //         profile_link: state.owner.profile_link,
  //         taggedPeople: [ ...state.selectedUsers ]
  //       },
  //       selectedUsers: [],
  //       users:[
  //         {id:1, username:"Kathryn Simmmons",profile_link:"/user1.svg",tag:true},
  //         {id:2, username:"Arlene Simmmons",profile_link:"/user2.svg", tag:true},
  //         {id:3, username:"Harold Flores",profile_link:"/user3.svg", tag:false},
  //         {id:4, username:"Max Steward",profile_link:"/user4.svg", tag: true},
  //         {id:5, username:"Kathryn Simmmons",profile_link:"/user1.svg",tag:true},
  //         {id:6, username:"Arlene Simmmons",profile_link:"/user2.svg", tag:true},
  //         {id:7, username:"Harold Flores",profile_link:"/user3.svg", tag:false},
  //         {id:8, username:"Max Steward",profile_link:"/user4.svg", tag: true}
  //       ]
  //     }

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