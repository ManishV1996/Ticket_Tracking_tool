// Navbar.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Ticket Tracking Tool</Navbar.Brand>
    </Navbar>
  );
}

export default NavBar;
