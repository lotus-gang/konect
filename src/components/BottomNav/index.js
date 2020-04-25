import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../store/context/auth-context";
import "../../styles/components/NavBar/index.css";
import "./index.css";

const BottomNav = (props) => {
  const auth = useContext(AuthContext); 
  return (
    <Container className="bottom-nav">
      <NavLink to={`/`} className="bottom-nav-item explore">
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
