import React from 'react';
import { Router, Route, browserHistory } from 'react-router'
import Home from './Components/Home'
import Teams from './Components/Teams'
import Users from './Components/Users'
import Clients from './Components/Clients'
import Web from './Components/Web'
import Database from './Components/Database'
import Linux from './Components/Linux'
import './App.css';

function App() {

  return(
    <Router history={browserHistory}>
      <Route path="/" component={Home}/>
      <Route path="/teams" component={Teams}/>
      <Route path="/users" component={Users}/>
      <Route path="/clients" component={Clients}/>
      <Route path="/web" component={Web}/>
      <Route path="/database" component={Database}/>
      <Route path="/linux" component={Linux}/>
    </Router>
  );

}

export default App;
