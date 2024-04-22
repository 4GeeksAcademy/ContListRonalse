/*import React ,{ createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export const UserContextProvider = ({children}) =>{
    const [userInput, setUserInput] = useState({
        name: "",
        address : "",
        phone: "",
        email: "",
      });

    const [contactos, setContactos] = useState([]);

    useEffect (()=>{
    const getData = async () => {   
        fetch("https://playground.4geeks.com/contact/agendas/Marcos")
        .then((response) => response.json())
        .then((result) => {
            console.log(contactos)
            setContactos(result.contacts)
        })
        .catch((error) => console.error(error));
        };

    getData();
  },[]);   

  const postData = async ( e ) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

setUserInput({ name: "", address: "", phone: "", email: "" });
const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: JSON.stringify(userInput),
  redirect: "follow"
};

fetch("https://playground.4geeks.com/contact/agendas/Marcos/contacts", requestOptions)
  .then((response) => response.json())
  .then((result) => { setContactos(result);
    console.log(result)})
  .catch((error) => console.error(error));
  }

  const Store = {
    contactos,
    userInput,
    setUserInput,
    postData
  };

 
  return (
    <UserContext.Provider value={{Store}}>
        {children}
    </UserContext.Provider>
  );
};

const Contexto = () =>  useContext(UserContext);

export default Contexto;

Vero Bitar
9:13 p.m.
import React, { useContext } from "react";
import { Context } from "../store/appContext";


const Contact = ({element}) => {
	const {store, actions} = useContext(Context)
Vero Bitar
9:17 p.m.
ESTO HACE QUE TE PUEDAS COMUNICAR CON EL FLUX.JS
DESDE UN COMPONENTE
actions.getContacto

*/