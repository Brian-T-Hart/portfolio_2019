import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './HomePage';
import BlogPost1 from './BlogPost1';
import BlogPost2 from './BlogPost2';
import BlogPost3 from './BlogPost3';
import NotFound from './NotFound';

export default class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/blog/1" component={BlogPost1} />
                    <Route exact path="/blog/2" component={BlogPost2} />
                    <Route exact path="/blog/3" component={BlogPost3} />
                    <Route exact path="/" component={HomePage} />
                    <Route path="/*" component={NotFound} />
                </Switch>
            </Router>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
