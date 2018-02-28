import React from 'react';
import {Switch, Route} from 'react-router-dom';
// Component Imports
import PageNotFound from '../other/PageNotFound.js';
import Homepage from '../homepage/Homepage.js';
import Latest from '../latest/Latest.js'

// Development Routes
function Routes() {
  return (
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/latest' component={Latest} />
      <Route path="*" component={PageNotFound} />
    </Switch>
  )
}

class Main extends React.Component {
  render() {
    return (
      <div>
        <Routes />
      </div>
    )
  }
}

export default Main
