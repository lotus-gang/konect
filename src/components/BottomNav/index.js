import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import "./index.css";
import { Container } from "react-bootstrap";
import "../../styles/components/NavBar/index.css";
import { AuthContext } from "../../shared/context/auth-context";

const BottomNav = (props) => {
  const auth = useContext(AuthContext);
  return (
    <Container className="bottom-nav">
      <NavLink to={`/${auth.userId}`} className="bottom-nav-item explore">
        <i class="bottom-nav-icon fas fa-search"></i>
        <span className="text-body">Explore</span>
      </NavLink>
      <NavLink to="/supply/new" className="bottom-nav-item add-product">
        <i class="bottom-nav-icon fas fa-plus"></i>
        <span className="text-body">Add</span>
      </NavLink>
      <NavLink to="/auth" className="bottom-nav-item profile">
        <i class="bottom-nav-icon fas fa-user"></i>
        <span className="text-body">Profile</span>
      </NavLink>
    </Container>
  );
};

export default BottomNav;
