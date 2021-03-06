import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => (
	<div className="bg-lightgray section" id="section-blog">
		<h1 className="section-title">Blog</h1>
		
		<div className="row flex-column flex-sm-row justify-content-around align-items-center mh-60">
			<Link to="/blog/1">
				<div className="d-flex flex-column mb-3">
					<img className="blog-section-image" src="https://cdn.pixabay.com/photo/2018/05/18/15/30/webdesign-3411373_960_720.jpg" alt="Web design graphic with computer screen, mouse and keyboard"></img>
					<h4 className="m-2 text-center">Web Design Basics</h4>
				</div>
			</Link>

			<Link to="/blog/2">
				<div className="d-flex flex-column mb-3">
					<img className="blog-section-image" src="https://www.publicdomainpictures.net/pictures/290000/velka/web-hosting.jpg"></img>
					<h4 className="m-2 text-center">Cloud Computing</h4>
				</div>
			</Link>

			<Link to="/blog/3">
				<div className="d-flex flex-column mb-3">
					<img className="blog-section-image" src="http://ozarate.net/imagenes_sitio/titulo_img.png"></img>
					<h4 className="m-2 text-center">Full Stack Jack</h4>
				</div>
			</Link>
		</div>
	</div>
)

export default Blog;