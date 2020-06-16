import React, { useState } from 'react';
import {  Navbar, NavbarBrand, Nav, NavItem,} from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Navbarhdr = () => {
  return (
    <div>
      <Navbar color="faded" light>
      <NavLink  to='/Home' left ><NavbarBrand href="/" className="mr-auto">Sheeja Shyjo Library</NavbarBrand></NavLink>
          <Nav navbar>
            <NavItem>
              <NavLink  to='/Home' left >Home</NavLink>
            </NavItem>
          </Nav>        
      </Navbar>
    </div>
  );
}

export default Navbarhdr;