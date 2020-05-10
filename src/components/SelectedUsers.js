import React from "react";
import { useDispatch } from 'react-redux';
import { deleteSelectedUser } from '../actions/getUsers';

const SelectedUsers = (props)=>{

  const dispatch = useDispatch();

  return(
    <React.Fragment>
        {/* Selected User */}
        {props.users.map(user=> (
          <div className="selected_user_">
            <img src={user.profile_link} alt="Profile Pic" />
            <span style={{marginLeft:"5px"}}>{user.username}</span>

            <span onClick={e=>  dispatch(deleteSelectedUser(user)) }> <img alt="Icon"
            onMouseOver={e=> { 
              e.currentTarget.src = "/hover_interface.svg";
            }
            }
            onMouseOut={e=> e.currentTarget.src = "/interface.svg" }

            src="/interface.svg" width="10px" height="10px" /> </span>

          </div>
        ))}

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