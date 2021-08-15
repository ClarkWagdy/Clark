import './App.css';
import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
class App extends Component {
  state = {  }
  render() { 
    return (  
<>
      <Switch>
      <Route path="/" component={Header}></Route>
      <Route path="/" component={Home}></Route>
      
          </Switch>
          </>
    );
  }
}
 
export default App;

