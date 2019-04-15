import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import About from './About/About';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import Projects from './Projects/Projects';

export default class App extends Component {
    render() {
        return (
            <div id="main-container">
                <Navbar />
                <div className="content-container">
                    <Home />
                    <About />
                    <Projects />
                    <Contact />
                </div>
            </div>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
