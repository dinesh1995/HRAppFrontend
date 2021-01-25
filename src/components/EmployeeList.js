import React, { Component } from 'react';
import axios from "axios"; 
import { Table, Button, Input, Label } from 'reactstrap';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { FaRegEdit } from 'react-icons/fa';

import './EmployeeList.css'

class EmployeeList extends Component {
  state = {
    employees: [{emailId: "Loading Employee details..."}],
    teamfilter: 'All',
    searchName: ''
  }

  async componentDidMount() {
    const resp = await axios.get(process.env.REACT_APP_WEB_SERVICE_URL+"/empList");
    this.setState({ employees: resp.data });
  }

  filterChange = async (event) => {
    this.setState({ teamfilter: event.target.value});
    this.setState({ employees: [{emailId: "Loading Employee details..."}]});
    const resp = await axios.get(process.env.REACT_APP_WEB_SERVICE_URL+"/empList");
    if(this.state.teamfilter === "All"){
      this.setState({ employees: resp.data });
    }
    else{
      let matched_emp = []
      resp.data.map((emp) => {
        if(emp.teamName === this.state.teamfilter){
          matched_emp.push(emp)
        }
      })
      this.setState({ employees: matched_emp });
    }
  }

  nameChange = async (event) => {
    this.setState({ searchName: event.target.value});
    this.setState({ employees: [{emailId: "Loading Employee details..."}]});
    const resp = await axios.get(process.env.REACT_APP_WEB_SERVICE_URL+"/empList");
    let matched_emp = []
    resp.data.map((emp) => {
      if(emp.name.toLowerCase().includes(this.state.searchName.toLowerCase())){
        matched_emp.push(emp)
      }
    })
    this.setState({ employees: matched_emp });
  }


  render() {
    const isAdmin = (JSON.parse(sessionStorage.getItem('role')) === 'Admin');
    return (
      <div className="content">
        <div className="employeeOptions">
          <Button className="add-button" onClick={()=>{window.location.pathname = '/addEmployee'}}><AiOutlinePlusCircle className="icons"/> Add New Employee</Button>
          <Label for="teamFilter" id="teamFilterLabel">Filter</Label>
          <Input type="select" name="teamName" id="teamFilter" onChange={this.filterChange} value={this.state.teamfilter}>
            <option value="All">All Teams</option>
            <option value="Engineering">Engineering</option>
            <option value="Support">Support</option>
            <option value="Sales">Sales</option>
            <option value="Lifters">Lifters</option>
            <option value="HR">HR</option>
            <option value="Marketing">Marketing</option>
          </Input>
          <Input type="text" name="nameSearch" id="employeeNameSearch" placeholder="Search Employee" onChange={this.nameChange}/>
        </div>
        <Table striped className="employee-table">
        <thead>
          <tr>
            <th>Emp ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Role</th>
            <th>Team</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        {this.state.employees.map(( listValue, index ) => {
          return(
            <tr key={listValue.empId}>
              <td>{listValue.empId}</td>
              <td>{listValue.name}</td>
              <td>{listValue.emailId}</td>
              <td>{listValue.gender}</td>
              <td>{listValue.role}</td>
              <td>{listValue.teamName}</td>
              {isAdmin? <td><a href={'/employeeDetail/'+listValue.empId}><FaRegEdit/></a></td> : <td></td>}
            </tr>
          );
        })}
        </tbody>
        </Table>
      </div>
    )
  }
};

export default EmployeeList;