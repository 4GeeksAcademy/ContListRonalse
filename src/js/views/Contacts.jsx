import React from "react";
import { ListContact } from "../component/ListContact";
import { Link } from "react-router-dom";
export const Contacts = () => {

    
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
        </div>

</div>
    )
}
