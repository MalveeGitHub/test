import React, {useState, useEffect, useRef} from "react";
import { useSelector, useDispatch } from "react-redux";
import {searchUser} from "../actions/getUsers";

const Search = ()=>{
  let [search, setSearch] = useState("");
  let [searchIconText, setSearchIconText] = useState(true);
  const dispatch = useDispatch();

  const SelectedUsers = useSelector(state=>  state.userReducer.users);

  const inputRef = useRef();

  const handleSearch = ()=>{
    let OrderUser = [];

    // This is users and not selectedUsersData
    SelectedUsers.map(user=> {
      
      if(user.username.toLowerCase().includes(search.toLowerCase()))
       OrderUser.push(user);
    })

    SelectedUsers.map(user=>{
      if(!user.username.toLowerCase().includes(search.toLowerCase()))
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
    <div className="search_div_parent">
      <input onBlur={e=> {
        setSearchIconText(true);
        setSearch("");
      }} ref={inputRef } className="search_box text-center" onChange={e=> setSearch(e.target.value)} placeholder="" value={search} onKeyDown={e=> {
        if(e.key === "Enter"){
          handleSearch()
        }
      }}/>

     {searchIconText ? (
       <React.Fragment>
        <div className="overlay_search" onClick={e=> {
          setSearchIconText(false);
          inputRef.current.focus();
          }}></div>
          <span className="search_icon_text">
            <img src="/assets/search_icon.svg" />
            <span className="search_text">Search</span> 
          </span>
       </React.Fragment>
     ): null}
      

    </div>
  )
}

export default Search;