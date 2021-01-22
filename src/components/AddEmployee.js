import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from "axios"; 


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
      teamName: '',
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
    console.log(this.state);
    let resp = await axios.post('http://localhost:8080/addEmployee', this.state, {headers: {'Content-type': 'application/json'}});
    console.log(resp);
  }

  render(){
  return (
    <Form id="addEmployeeForm" onSubmit = { this.handleSubmit }>
      <FormGroup row>
        <Label for="employeeName" sm={2}>Name</Label>
        <Col sm={5}>
          <Input type="text" name="name" id="employeeName" placeholder="Enter Employee Full Name" onChange={this.handleChange}/>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="employeeEmail" sm={2}>Email</Label>
        <Col sm={5}>
          <Input type="email" name="emailId" id="employeeEmail" placeholder="Enter Employee Email" onChange={this.handleChange}/>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="employeePassword" sm={2}>Password</Label>
        <Col sm={5}>
          <Input type="password" name="password" id="employeePassword" placeholder="Enter Employee Password" onChange={this.handleChange}/>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="employeeDob" sm={2}>Date of Birth</Label>
        <Col sm={2}>
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
        <Col sm={2}>
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
        <Label for="employeeTeam" sm={2}>Team Name</Label>
        <Col sm={5}>
          <Input type="text" name="teamName" id="employeeTeam" placeholder="Enter Employee Team" onChange={this.handleChange}/>
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
          <Button>Submit</Button>
        </Col>
      </FormGroup>
    </Form>
  );
  }
}

export default AddEmployee;
