import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-dark  navbars">
			<Link to="/" style={{ textDecoration: 'none' }}>
				<p className="navbar-brand mb-0 h1 text-light  "  ><i className="far fa-address-book mx-2" style={{color: "#B197FC", fontSize : 24}}></i>Contact List</p>
			</Link>
			<div className="ml-auto">
				<Link to="/AddContact">
					<button className="btn btn-success">Add new contact</button>
				</Link>
			</div>
		</nav>
	);
};
