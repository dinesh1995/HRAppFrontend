import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from "axios"; 
import './Login.css';


class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      emailId: '',
      password: ''
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
    let resp = await axios.post(process.env.REACT_APP_WEB_SERVICE_URL+"/login", this.state, {headers: {'Content-type': 'application/json'}});
    console.log(resp);
    if (resp.status == 200){
      sessionStorage.setItem('token', JSON.stringify(resp.data.empId));
      sessionStorage.setItem('name', JSON.stringify(resp.data.name));
      window.location.pathname = '/home'
    }
  }

  render(){
  return (
    <div className="content">
      <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
        <div className="card card0 border-0">
          <div className="row d-flex">
            <div className="col-lg-6">
              <div className="card1 pb-5">
                <div className="row px-3 justify-content-center mt-4 mb-5"> <img src="https://hrone.cloud/wp-content/uploads/2020/12/hrms-guide1.png" className="image" /> </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card2 card border-0 px-4 py-5">
                <div className="row mb-4 px-3 login-form">
                  <Form id="loginForm" onSubmit = { this.handleSubmit }>
                    <div className="row px-3"> 
                      <label className="mb-1"><h6 className="mb-0 text-sm">Email Address</h6></label>
                      <Input className="mb-4" type="email" name="emailId" id="employeeEmail" placeholder="Enter your email address" onChange={this.handleChange} required/>
                    </div>
                    <div className="row px-3"> 
                      <label className="mb-1"><h6 className="mb-0 text-sm">Password</h6></label> 
                      <Input type="password" name="password" id="employeePassword" placeholder="Enter your password" onChange={this.handleChange} required/>
                    </div>
                    <div className="row mb-3 px-3"> 
                      <Button className="login-button">Login</Button>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  }
}

export default Login;