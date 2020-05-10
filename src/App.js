import React, { useEffect } from 'react';
import './App.css';
import { Provider } from 'react-redux'
import configureStore from './store';
import DisplayPeople from "./components/DisplayPeople";
import { useSelector, useDispatch } from "react-redux";
import SelectedUsers from "./components/SelectedUsers";

function App() {

  const users = useSelector(state=> state.userReducer.users);

  const selectedUser = useSelector(state => state.userReducer.selectedUsers);
  
  const ownerData = useSelector(state => state.userReducer.owner);

  console.log(selectedUser)
  
  

  return (
    <div className="App">
      <div className="container">
        <div className='frame1'>

          <div className="first_section">
              <img alt="Profile" src={ownerData.profile_link} width="52" height="52" />
              <span>{ownerData.username}</span>
          </div>

        <div className="button-tag " style={{textAlign:"center"}}>

          <button type="button" class="btn tagpeople" data-toggle="modal" data-target="#exampleModal">
                        <img alt='Tag People' src="/btn.svg" /> Tag People
                        </button>

        </div>
          

          <div className="button-tag " >
             
             {/* <a href=""> <img src="/btn.svg" /> Tag People </a> */}

      {/* New Code */}
              


        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">

              {/* Model header */}
              <div class="modal-header">
              <div>
                <button data-dismiss="modal" className="btn backbutton"> <img alt="Button" src="/backbtn.svg" /> Back</button>
                <span className="text-center tagpeople_text"> <img alt="Button" src="/tagpeople_top.svg" />  Tag People </span>

                
                
                

              </div>
                
                

                
              </div>


              <div class="modal-body">
                <div>
                  <div className="search_div">
                      <input className="search_box text-center" placeholder="Search"/>
                    </div>

                    <div className="search_result">
                      
                      <SelectedUsers users={selectedUser}/>
                      
                      
                    </div>

                    <span className="select_people ">Select people</span>
                    <DisplayPeople users={users}/>
                  
                  </div>
              </div>


              {/* <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div> */}

            </div>
          </div>
        </div>

          </div>

        </div>
      </div>
    </div>
  );
}


const MainApp = ()=>{
  return(
    <Provider store={configureStore}>
        <App />
    </Provider>
  )
}

export default MainApp;
