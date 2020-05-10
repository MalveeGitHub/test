import React from "react";
import { useDispatch } from 'react-redux';
import { deleteSelectedUser, setTagsToUser } from '../actions/getUsers';

const SelectedUsers = (props)=>{

  const dispatch = useDispatch();

  return(
    <React.Fragment>
        {/* Selected User */}
        {props.users.map(user=> (
          <div className="selected_user_">
            <img src={user.profile_link} />
            <span style={{marginLeft:"5px"}}>{user.username}</span>

            <span onClick={e=>  dispatch(deleteSelectedUser(user)) }> <img 
            onMouseOver={e=> { 
              e.currentTarget.src = "/hover_interface.svg";
            }
            }
            onMouseOut={e=> e.currentTarget.src = "/interface.svg" }

            src="/interface.svg" width="10px" height="10px" /> </span>

          </div>
        ))}

        {props.users.length != 0? <div className='done_button'>
            <button data-dismiss="modal"  onClick={e => dispatch(setTagsToUser())} className="btn">Done</button>
        </div>: null}
    </React.Fragment>
  )

}


export default SelectedUsers;