import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import {searchUser} from "../actions/getUsers";

const Search = ()=>{
  let [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const SelectedUsers = useSelector(state=>  state.userReducer.users);

  const handleSearch = ()=>{
    let OrderUser = [];

       
    SelectedUsers.map(user=> {
      
      if(user.username.toLowerCase().includes(search.toLowerCase()))
       OrderUser.push(user);
    })

    console.log(OrderUser)
    if(OrderUser.length !== 0){
     dispatch(searchUser(OrderUser));
    }
  }

  useEffect(()=>{
    if(search === ""){
      //Back to default
      dispatch({type:"RESET_SEARCH"})
    }
     
  }, [search])

  return(
    <div>
      <input className="search_box text-center" onChange={e=> setSearch(e.target.value)} placeholder="Search" value={search} onKeyDown={e=> {
        if(e.key === "Enter"){
          handleSearch()
        }
      }}/>
    </div>
  )
}

export default Search;