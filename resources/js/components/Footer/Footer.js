import React from 'react';
import FooterIcon from '../Icons/FooterIcons';

const Footer = () => (
	<div className="d-sm-flex justify-content-center bg-darkgray" id="footer">
		<FooterIcon href="https://www.linkedin.com/in/hartbriant/" className="fab fa-linkedin-in" />
		<FooterIcon href="https://github.com/Brian-T-Hart" className="fab fa-github" />
		<FooterIcon href="https://stackoverflow.com/users/10062801/brian-hart?tab=profile" className="fab fa-stack-overflow" />
	</div>
)

export default Footer;