import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../../context/auth-context";
import "./NavLinks.css";

const NavLinks = props => {
  const auth = useContext(AuthContext);
  const [showSearch, setShowSearch] = useState(false);

  const searchHandler = () => {
    setShowSearch(!showSearch);
  };

  return (
    <ul className="nav-links">
      {showSearch && (
        <li>
          <input type="text" />
        </li>
      )}
      <li>
        <NavLink to="/" exact>
          ALL SUPPLIERS
        </NavLink>
      </li>

      <li>
        <button onClick={searchHandler}>SEARCH</button>
      </li>
      {auth.isLoggedIn && (
        <li>
          <NavLink to={`/${auth.userId}`}>MY SUPPLY</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/supply/new">ADD SUPPLY</NavLink>
        </li>
      )}
      {!auth.isLoggedIn && (
        <li>
          <NavLink to="/auth">AUTHENTICATE</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <button onClick={auth.logout}>LOGOUT</button>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
