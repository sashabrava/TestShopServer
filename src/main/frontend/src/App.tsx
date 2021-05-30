import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ItemList from './ItemPages/ItemList';
import ItemEdit from './ItemPages/ItemEdit';
import Home from './Home';

export const ApiPath = "/api/v2/";

class App extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route path='/' exact={true} component={Home}/>
            <Route path='/items' exact={true} component={ItemList}/>
            <Route path='/items/:id' component={ItemEdit}/>
          </Switch>
        </Router>
    )
  }
}

export default App;
