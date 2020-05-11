import React from "react";
import { useDispatch } from 'react-redux';
import { deleteSelectedUser } from '../actions/getUsers';

const SelectedUsers = (props)=>{

  const dispatch = useDispatch();

  return(
    <React.Fragment>
        {/* Selected User */}
        <div className="search_result_inner" style={props.noBorder? {border:"none"} : {}}>
        {props.users.map(user=> (
          <div className="selected_user_">
            
              <img src={user.profile_link} alt="Profile Pic" />
              <span style={{marginLeft:"5px"}}>{user.username}</span>

              <span onClick={e=>  dispatch(deleteSelectedUser(user)) }> <img alt="Icon"
              className="close_button_left_"
              onMouseOver={e=> { 
                e.currentTarget.src = "/assets/close.svg";
                e.currentTarget.width = 20;
                e.currentTarget.height = 20;
                e.currentTarget.className = "close_button_left_";
                console.log(e.currentTarget.width)
              }
              }
              onMouseOut={e=> {
                e.currentTarget.src = "/interface.svg";
                e.currentTarget.height = 10;
                e.currentTarget.width = 10;
              } }

              src="/interface.svg" width="10px" height="10px" alt="IMG" /> </span>
            </div>
       
        ))}
      </div>
      {props.admin ? null : (<div>
        {props.users.length !== 0? <div className='done_button'>
            <button data-dismiss="modal"   className="btn">Done</button>
        </div>: null}
      </div>) }

        {/* onClick={e => dispatch(setTagsToUser())} */}
    </React.Fragment>
  )

}


export default SelectedUsers;