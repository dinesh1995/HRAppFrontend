import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import './App.css';
import AddEmployee from './components/AddEmployee';
import SideBar from './components/SideBar';
import EmployeeList from './components/EmployeeList';
import Login from './components/Login';
import Leave from './components/Leave';
import AddLeave from './components/AddLeave';
import Employee from './components/Employee';
import Home from './components/Home';

export default function App() {
  const tokenString = sessionStorage.getItem('token');
  const token = JSON.parse(tokenString);

  if(!token) {
    return <Login />
  }

  return (
      <div className="App">
        <ToastContainer />
        <Router>
          <Switch>
            <Route exact path="/home">
              <SideBar />
              <Home />
            </Route>
            <Route path="/addEmployee">
              <SideBar />
              <AddEmployee />
            </Route>
            <Route path="/employee">
              <SideBar />
              <EmployeeList />
            </Route>
            <Route path="/leave">
              <SideBar />
              <Leave />
            </Route>
            <Route path="/addLeave">
              <SideBar />
              <AddLeave />
            </Route>
            <Route path="/employeeDetail/:empId" render={(props)=> (
              <>
                <SideBar />
                <Employee empId = {props.match.params.empId}/>
              </>
            )}>
            </Route>
          </Switch>
        </Router>
      </div>
  );
}
