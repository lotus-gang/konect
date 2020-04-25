import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { Container } from "react-bootstrap";
import "../../styles/components/NavBar/index.css";

const BottomNav = (props) => {
  return <Container className="bottom-nav">
    <div className="explore">
      
    </div>
    <div className="add-product"></div>
    <div className="profile"></div>
  </Container>;
};

export default BottomNav;
