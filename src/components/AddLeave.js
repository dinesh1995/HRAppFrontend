import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from "axios"; 


class AddLeave extends Component {
  constructor(props){
    super(props)
    this.state = {
      empId: sessionStorage.getItem('token'),
      leaveType: 'Sick Leave',
      startDate: '',
      endDate: '',
      comment: '',
      noOfDays: ''
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
    let resp = await axios.post(process.env.REACT_APP_WEB_SERVICE_URL+"/addLeaves", this.state, {headers: {'Content-type': 'application/json'}});
    console.log(resp);
    window.location.pathname = '/employee'
  }

  render(){
  return (
    <div className="content">
      <Form id="addEmployeeForm" onSubmit = { this.handleSubmit }>
      <FormGroup row>
          <Label for="type" sm={2}>Leave Type</Label>
          <Col sm={3}>
            <Input type="select" name="leaveType" id="type" onChange={this.handleChange}>
              <option value="Sick Leave">Sick Leave</option>
              <option value="Casual Leave">Casual Leave</option>
              <option value="Earned Leave">Earned Leave</option>
            </Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="startDate" sm={2}>Start Date</Label>
          <Col sm={3}>
            <Input type="date" name="startDate" id="startDate" onChange={this.handleChange}/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="endDate" sm={2}>End Date</Label>
          <Col sm={3}>
            <Input type="date" name="endDate" id="endDate" onChange={this.handleChange}/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="reason" sm={2}>Reason</Label>
          <Col sm={5}>
            <Input type="text" name="comment" id="reason" placeholder="Enter reason if any" onChange={this.handleChange}/>
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button>Apply Time off</Button>
          </Col>
        </FormGroup>
      </Form>
    </div>
  );
  }
}

export default AddLeave;
