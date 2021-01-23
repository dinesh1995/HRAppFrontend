import React, {Component} from 'react'

import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import './SideBar.css';
import { FaHome } from 'react-icons/fa';
import { AiOutlineHome } from 'react-icons/ai';
import { FaRegUserCircle } from 'react-icons/fa';

class SideBar extends Component {
  constructor(props){
    super(props)
  }

  render(){
  return (
    <ProSidebar className="sidebar">
      <Menu iconShape="square">
        <MenuItem onClick={()=>{window.location.pathname = '/'}}><AiOutlineHome className="icons"/> Dashboard</MenuItem>
        <MenuItem onClick={()=>{window.location.pathname = '/employee'}}><FaRegUserCircle className="icons"/> Employees</MenuItem>
      </Menu>
    </ProSidebar>
  );
  }
}

export default SideBar;
