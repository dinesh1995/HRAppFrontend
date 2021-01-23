import React, { Component } from 'react';
import axios from "axios"; 
import { Table, Button } from 'reactstrap';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { FaRegEdit } from 'react-icons/fa';

import './EmployeeList.css'

const columns = [
  {
    name: 'Emp ID',
    selector: 'empId',
    sortable: true,
  },
  {
    name: 'Name',
    selector: 'name',
    sortable: true,
  },
  {
    name: 'Email',
    selector: 'emailId',
    sortable: true,
  },
  {
    name: 'Gender',
    selector: 'gender',
    sortable: true,
  },
  {
    name: 'Role',
    selector: 'role',
    sortable: true,
  },
  {
    name: 'Team',
    selector: 'teamName',
    sortable: true,
  },
  {
    name: 'Edit',
    selector: 'teamName'
  }
];

class EmployeeList extends Component {
  state = {
    employees: []
  }

  async componentDidMount() {
    const resp = await axios.get(process.env.REACT_APP_WEB_SERVICE_URL+"/empList");
    console.log(resp.data);
    this.setState({ employees: resp.data });
  }

  render() {
    return (
      <div className="content">
        <Button className="add-button" onClick={()=>{window.location.pathname = '/addEmployee'}}><AiOutlinePlusCircle className="icons"/> Add New Employee</Button>
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
              <td>{listValue.team}</td>
              <td><FaRegEdit/></td>
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