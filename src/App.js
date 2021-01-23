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
import AddLeave from './components/AddLeave';
import Employee from './components/Employee';

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

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}


