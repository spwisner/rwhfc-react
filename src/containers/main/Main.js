import React from 'react';
import {Switch, Route} from 'react-router-dom';
// Component Imports
import PageNotFound from '../other/PageNotFound.js';
import Homepage from '../homepage/Homepage.js';

// Development Routes
function Routes() {
  return (
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path="*" component={PageNotFound} />
    </Switch>
  )
}

class Main extends React.Component {
  constructor(props) {
    super(props)

    this._routes = this._routes.bind(this);
  }

  _routes() {
    return (
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    )
  }

  render() {
    return (
      <div>
        <Routes />
      </div>
    )
  }
}

export default Main
