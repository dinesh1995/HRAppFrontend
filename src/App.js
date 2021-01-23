import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import AddEmployee from './components/AddEmployee';
import SideBar from './components/SideBar';
import EmployeeList from './components/EmployeeList';

export default function App() {
  return (
    <div className="App">
      <SideBar />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/addEmployee">
            <AddEmployee />
          </Route>
          <Route path="/employee">
            <EmployeeList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

