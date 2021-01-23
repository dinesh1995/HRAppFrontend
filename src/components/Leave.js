import React, { Component } from 'react';
import axios from "axios"; 
import { Table, Button } from 'reactstrap';
import { AiOutlinePlusCircle } from 'react-icons/ai';

import './Leave.css'

class Leave extends Component {
  state = {
    upcoming_leaves: [ {startDate: "No Data Available"}],
    archived_leaves: [ {startDate: "No Data Available"}]
  }

  async componentDidMount() {
    const empId = JSON.parse(sessionStorage.getItem('token'));
    console.log(empId);
    const resp = await axios.get(process.env.REACT_APP_WEB_SERVICE_URL+"/showLeaves/"+empId);
    resp.data.map((listValue) => {
      if ( new Date('listValue.startDate') > new Date()){
        this.setState({ upcoming_leaves: [...this.state.upcoming_leaves, resp.data] });
      }
      else {
        this.setState({ archived_leaves: [...this.state.archived_leaves, resp.data] });
      }
    })
  }

  render() {
    return (
      <div className="content">
        <Button className="add-button" onClick={()=>{window.location.pathname = '/addLeave'}}><AiOutlinePlusCircle className="icons"/> Request Time off</Button>
        <Table striped className="leave-table">
        <thead>
          <tr>
            <th colSpan="4" className="leave-title">Your Upcoming Time-off</th>
          </tr>
          <tr>
            <th>Leave Type</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
        {this.state.upcoming_leaves.map(( listValue, index ) => {
          return(
            <tr key={index}>
              <td>{listValue.leaveType}</td>
              <td>{listValue.startDate}</td>
              <td>{listValue.endDate}</td>
              <td>{listValue.comment}</td>
            </tr>
          );
        })}
        </tbody>
        </Table>

        <Table striped className="leave-table">
        <thead>
          <tr>
            <th colSpan="4" className="leave-title">Past Time-off</th>
          </tr>
          <tr>
            <th>Leave Type</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
        {this.state.archived_leaves.map(( listValue, index ) => {
          return(
            <tr key={index}>
              <td>{listValue.leaveType}</td>
              <td>{listValue.startDate}</td>
              <td>{listValue.endDate}</td>
              <td>{listValue.comment}</td>
            </tr>
          );
        })}
        </tbody>
        </Table>
      </div>
    )
  }
};

export default Leave;