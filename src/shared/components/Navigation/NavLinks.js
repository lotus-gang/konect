import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../../context/auth-context";
import "./NavLinks.css";

const NavLinks = props => {
  const auth = useContext(AuthContext);
  const search = useContext(AuthContext);
  const [showSearch, setShowSearch] = useState(false);

  const changeHandler = event => {};

  const searchHandler = () => {
    setShowSearch(!showSearch);
  };

  return (
    <ul className="nav-links">
      {showSearch && (
        <li>
          <input type="text" onChange={search.search} />
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
          <NavLink to={`/${auth.userId}/places`}>MY PLACES</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/places/new">ADD PLACE</NavLink>
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
