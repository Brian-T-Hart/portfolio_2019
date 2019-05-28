import React from 'react';
import NavIcon from '../Icons/NavIcon';

const Blog = () => (
	<div className="bg-lightgray section" id="section-blog">
		<h1 className="section-title">Blog</h1>
		
		<div className="row flex-column flex-sm-row justify-content-around align-items-center">
			<div className="d-flex flex-column">
				<NavIcon className="fas fa-home" dataId="section-home" iText="Home" />
				<p>Placeholder 1</p>
			</div>

			<div className="d-flex flex-column">
				<NavIcon className="fas fa-home" dataId="section-home" iText="Home" />
				<p>Placeholder 2</p>
			</div>

			<div className="d-flex flex-column">
				<NavIcon className="fas fa-home" dataId="section-home" iText="Home" />
				<p>Placeholder 3</p>
			</div>
		</div>
	</div>
)

export default Blog;