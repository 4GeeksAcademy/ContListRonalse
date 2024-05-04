import React, {useContext, useState} from "react";
import { ListContact } from "../component/ListContact";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Contacts = () => {
    const {store, actions} = useContext(Context);
    const [agendaCreated, setAgendaCreated] = useState(false);
    
    /*const handleCreateAgenda =  (e) => {
        e.preventDefault();
        if (!agendaCreated) {
            const isCreated = actions.CreateAgenda();
            if (isCreated) {
                setAgendaCreated(true);
                alert("Agenda creada");
            } else {
                alert("¡La agenda ya existe!");
            }
        } else {
            alert("¡La agenda ya está creada!");
        }
        //<button onClick={handleCreateAgenda} className="btn btn-warning mx-3">Crear Agenda</button>
    };*/
    
    return (

        <div className="container mt-5 contactos">
            <ul className="list-group mb-5 ">
                <ListContact/>
            </ul>
        </div>

    )
}
