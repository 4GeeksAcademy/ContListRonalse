import React, {useContext, useState} from "react";
import { ListContact } from "../component/ListContact";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Contacts = () => {
    const {store, actions} = useContext(Context);
    const [agendaCreated, setAgendaCreated] = useState(false);
    
    const handleCreateAgenda =  (e) => {
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
    };
    
    return (
<div className="container mt-5">
        <div className="container mt-4">
            <h1 className="text-center">Contact List</h1>
            <ul className="list-group">
                <ListContact/>
            </ul>
        
        </div>
        <div className="d-flex justify-content-center mt-4">
            <Link to="/AddContact">
				<button className="  btn btn-success justify-content-center">Add new contact</button>
		    </Link>
                <button onClick={handleCreateAgenda} className="btn btn-warning mx-3">Crear Agenda</button>
        </div>

</div>
    )
}
