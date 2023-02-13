import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { RiVipCrownLine } from 'react-icons/ri'
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial',}}>
      <CDBSidebar textColor="black" backgroundColor="black" textAlign="center" alignItems="center" justifyContent="center">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
          <RiVipCrownLine className='navbar-icon' style={{color: 'blue'}} />
            HumsMedical
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu style={{display: 'flex', justifyContent: 'center',}}>
            <NavLink exact to="/">
              <CDBSidebarMenuItem icon="home"></CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/tables">
              <CDBSidebarMenuItem icon="user"></CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/profile">
              <CDBSidebarMenuItem icon="envelope"></CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/analytics">
              <CDBSidebarMenuItem icon="circle"></CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center'}}>
          <div
            style={{
              marginTop: '-10rem'
            }}
          >
            <CDBSidebarMenuItem icon="box arrowout" style={{display: 'flex', justifyContent: 'center', color: 'blue'}}>Sign Out</CDBSidebarMenuItem>
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;