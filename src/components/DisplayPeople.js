import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedUser } from "../actions/getUsers";

function DisplayPeople(props){
  // const [ selectedUser, setSelectedUser] = useState(null);
  const dispatch = useDispatch();
 


  return(
    <div className="display_users">
      {props.users.map(user=>
      {
        return user.tag ?  (
          <div className="display_users_s" onClick={(e)=> {
            dispatch(setSelectedUser(user)); 
            console.log("EVENT", e)
            } }>
            <img alt="Profile Pic" src={user.profile_link} height="25" width="25"/>
             <span>{user.username}</span>
          </div>
        ): (
          <div className="display_users_s">
            <div className="no_tag_overlay">
              <img alt="Profile Pic" src={user.profile_link} height="25" width="25"/>
              <span>{user.username}</span>
            </div>
            

             <span className="no_tag_text">Dosen't want to be tagged</span>
          </div>
        )
      }
     
      
      )}
    </div>
  )
}


export default DisplayPeople;