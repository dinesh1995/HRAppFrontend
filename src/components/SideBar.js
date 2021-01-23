import React, {Component} from 'react'

import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import './SideBar.css';
import { AiOutlineHome } from 'react-icons/ai';
import { FaRegUserCircle } from 'react-icons/fa';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { CgLogOut } from 'react-icons/cg';

class SideBar extends Component {
  
  render(){
  const userName = JSON.parse(sessionStorage.getItem('name'));
  return (
    <ProSidebar className="sidebar">
      <Menu iconShape="square">
        <MenuItem>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1024px-User_icon_2.svg.png" className="userImg" alt="userImg"/>
          <p className="userName">Hey! {userName}</p>
        </MenuItem>
        <MenuItem onClick={()=>{window.location.pathname = '/home'}}><AiOutlineHome className="icons"/> Dashboard</MenuItem>
        <MenuItem onClick={()=>{window.location.pathname = '/employee'}}><FaRegUserCircle className="icons"/> Employees</MenuItem>
        <MenuItem onClick={()=>{window.location.pathname = '/leave'}}><AiOutlineFieldTime className="icons"/> Time off</MenuItem>
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
