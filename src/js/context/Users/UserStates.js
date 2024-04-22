/*import React, {useReducer} from "react";
import UserReducer from "/workspaces/ContListRonalse/src/js/context/Users/UserReducer.js"
import UserContext from "./UserContext";

const UserState =(props)=>{
  const initialState = {
      users : [],
      selectedUsers: null
    };

    //xd
  const [state, dispatch] = useReducer(UserReducer, initialState);

  const getUsers = async () => {
        const res = await fetch("https://playground.4geeks.com/contact/agendas/Marcos")
          dispatch({
            type : "GET_USERS",
            payload: res.contacts
          })    
    
  }
  const getProfile = async (id) => {
    const res = awaitfetch('https://playground.4geeks.com/contact/agendas/Marcos/contacts/' + id)
    dispatch({
      type: "GET_PROFILE",
      payload: res
  });

return(
  <UserContext.Provider 
    value={{
      users : state.users,
      selectedUsers: state.selectedUsers,
      getProfile,
      getUsers
  }}
  >
    {props.children}
  </UserContext.Provider>
);
};
}
export default UserState;*/
