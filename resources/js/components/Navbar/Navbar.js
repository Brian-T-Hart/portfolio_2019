import React from 'react';
import NavIcon from '../Icons/NavIcon';

const Navbar = () => (
	<div className="d-flex flex-column justify-content-around" id="section-navbar">
		<NavIcon className="fas fa-home" dataId="section-home" iText="Home" />
		<NavIcon className="fas fa-user" dataId="section-about" iText="About" />
		<NavIcon className="fas fa-newspaper" dataId="section-projects" iText="Projects" />
		<NavIcon className="fas fa-mobile-alt" dataId="section-contact" iText="Contact" />
	</div>
)

export default Navbar;