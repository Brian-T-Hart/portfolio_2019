import React, { Component } from 'react';
import projectDetails from './projectDetails';

class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = {
			projects: projectDetails
		}
	}

	render() {
		const projects = this.state.projects.map(project =>
			<div className="project-container" key={project.id}>
				<div className="card" style={{background: 'url(' + project.image_link + ') center center/cover'}}></div>
				<div className="project-text text-center">
					<div className="project-title font-weight-bold">{project.title}</div>
					<div className="project-subtitle">
						<h5 className="text-secondary">{project.subtitle}</h5>
					</div>
					<div className="d-flex justify-content-center project-links">
						<a className="project-link pr-3" href={project.github_link} target="_blank">code</a>
						<a className="project-link pl-3" href={project.web_link} target="_blank">site</a>
					</div>
				</div>
			</div>
		)

		return(
			<div className="section" id="section-projects">
				<h1 className="section-title">Projects</h1>
				<div className="d-flex justify-content-center row" id="gallery">
					{ projects }
				</div>
			</div>
		)
	}
}

export default Projects;