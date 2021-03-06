import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from "axios"; 
import { toast } from 'react-toastify';
import { BiSave } from 'react-icons/bi';
import { GiCancel } from 'react-icons/gi';
import './AddEmployee.css'

class AddEmployee extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      emailId: '',
      password: '',
      dob: '',
      address: '',
      gender: 'Male',
      phoneNo: '',
      role: '',
      teamName: 'Engineering',
      salary: ''
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = async(event) => {
    event.preventDefault();
    let resp = await axios.post(process.env.REACT_APP_WEB_SERVICE_URL+"/addEmployee", this.state, {headers: {'Content-type': 'application/json'}});
    if (resp.status === 200){
      toast.success('Employee added successfully!', {
        autoClose: 5000,
        closeOnClick: true
      })
      window.location.pathname = '/employeeDetail/'+resp.data.empId;
    }
    else {
      toast.error('Something went wrong! Try again later', {
        autoClose: 5000,
        closeOnClick: true
      })
    }
    
  }

  render(){
  return (
    <div className="content">
      <Form id="addEmployeeForm" onSubmit = { this.handleSubmit }>
        <FormGroup row>
          <Label for="employeeName" sm={2}>Name</Label>
          <Col sm={5}>
            <Input type="text" name="name" id="employeeName" placeholder="Enter Employee Full Name" onChange={this.handleChange} required/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="employeeEmail" sm={2}>Email</Label>
          <Col sm={5}>
            <Input type="email" name="emailId" id="employeeEmail" placeholder="Enter Employee Email" onChange={this.handleChange} required/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="employeePassword" sm={2}>Password</Label>
          <Col sm={5}>
            <Input type="password" name="password" id="employeePassword" placeholder="Enter Employee Password" onChange={this.handleChange} required/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="employeeDob" sm={2}>Date of Birth</Label>
          <Col sm={3}>
            <Input type="date" name="dob" id="employeeDob" onChange={this.handleChange}/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="employeeAddress" sm={2}>Address</Label>
          <Col sm={5}>
            <Input type="text" name="address" id="employeeAddress" placeholder="Enter Employee Address" onChange={this.handleChange}/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="employeeGender" sm={2}>Gender</Label>
          <Col sm={3}>
            <Input type="select" name="gender" id="employeeGender" onChange={this.handleChange}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="employeePhoneNumber" sm={2}>Phone Number</Label>
          <Col sm={5}>
            <Input type="text" name="phoneNo" id="employeePhoneNumber" placeholder="Enter Employee Phone number" onChange={this.handleChange}/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="employeeRole" sm={2}>Role</Label>
          <Col sm={5}>
            <Input type="text" name="role" id="employeeRole" placeholder="Enter Employee Role" onChange={this.handleChange}/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="employeeTeam" sm={2}>Team</Label>
          <Col sm={3}>
            <Input type="select" name="teamName" id="employeeTeam" onChange={this.handleChange} value={this.state.teamName}>
              <option value="Engineering">Engineering</option>
              <option value="Support">Support</option>
              <option value="Sales">Sales</option>
              <option value="Lifters">Lifters</option>
              <option value="HR">HR</option>
              <option value="Marketing">Marketing</option>
            </Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="employeeSalary" sm={2}>Salary amount ($)</Label>
          <Col sm={5}>
            <Input type="text" name="salary" id="employeeSalary" placeholder="Enter Employee Salary (in Dollars)" onChange={this.handleChange}/>
          </Col>
        </FormGroup>
        {/* <FormGroup row>
          <Label for="profilePic" sm={2}>Upload Profile pic</Label>
          <Col sm={5}>
            <Input type="file" name="pic" id="profilePic" />
          </Col>
        </FormGroup> */}
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button><BiSave className="icons"/> Add Employee</Button>
            <a href={'/employee'} className="btn btn-secondary cancelBtn"><GiCancel className="icons"/> Cancel</a>
          </Col>
        </FormGroup>
      </Form>
    </div>
  );
  }
}

export default AddEmployee;
