import React, {Component} from 'react'

import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import './SideBar.css';
import { AiOutlineHome } from 'react-icons/ai';
import { FaRegUserCircle } from 'react-icons/fa';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { CgLogOut } from 'react-icons/cg';

class SideBar extends Component {
  
  render(){
  return (
    <ProSidebar className="sidebar">
      <Menu iconShape="square">
        <MenuItem onClick={()=>{window.location.pathname = '/home'}}><AiOutlineHome className="icons"/> Dashboard</MenuItem>
        <MenuItem onClick={()=>{window.location.pathname = '/employee'}}><FaRegUserCircle className="icons"/> Employees</MenuItem>
        <MenuItem onClick={()=>{window.location.pathname = '/addLeave'}}><AiOutlineFieldTime className="icons"/> Time off</MenuItem>
        <MenuItem onClick={()=>{
          window.location.pathname = '/';
          sessionStorage.clear();
          }}><CgLogOut className="icons"/> Logout</MenuItem>
      </Menu>
    </ProSidebar>
  );
  }
}

export default SideBar;
