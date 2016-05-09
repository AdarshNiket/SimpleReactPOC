import React from 'react';
import Router from 'react-router';
import routes from './routes.js';

var AppContainer = React.createClass({
    render() {
        return (
            <Router>
                {routes}
            </Router>
        );
}
});

React.render((<AppContainer />), document.body);