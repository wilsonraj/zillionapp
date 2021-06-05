import React from 'react';
import './App.css';
import Login from './Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Register from './Register';
import Sidebar from './Sidebar'
import Logo from './Logo';



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
          <Login />
          </Route>
          <Route path="/register">
          <Register />
          </Route>
          <Route path="/mainpage">
          <Sidebar />
          <Logo/>
          </Route>
        </Switch>

      </Router>
      hey
  
      
    </div>
  );
}

export default App;
