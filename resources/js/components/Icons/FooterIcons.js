import React from 'react';

const FooterIcon = (props) => (
	<div className="icon-container d-flex align-items-center justify-content-center p-3">
		<a href={props.href} target="_blank"><i className={'footer-icon ' + props.className}></i></a>
	</div>
)

export default FooterIcon;