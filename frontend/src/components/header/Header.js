import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

import { Collapse, Navbar, NavbarToggler, NavbarBrand } from "reactstrap";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar color="white" light expand="md">
        <NavbarBrand href="/">YT Trending Scrapper</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar></Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
