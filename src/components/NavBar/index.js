import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Container } from "react-bootstrap";
import "../../styles/components/NavBar/index.css";

const NavBar = (props) => {
  //   const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  //   const openDrawerHandler = () => {
  //     setDrawerIsOpen(true);
  //   };

  //   const closeDrawerHandler = () => {
  //     setDrawerIsOpen(false);
  //   };

  return (
    <Container className="nav-bar">
      <Link to="/" className="title">
        Konect
      </Link>
    </Container>
  );
};

export default NavBar;
