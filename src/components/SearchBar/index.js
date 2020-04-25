import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Container, FormControl } from "react-bootstrap";
import "../../styles/components/SearchBar/index.css";

const NavBar = (props) => {
  const [value, setValue] = useState("");

  const changeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <Container className="search-bar">
      <FormControl
        className="search-input"
        value={value}
        onChange={changeInput}
      />
      <span className="search-icon">
        <i class="fas fa-search"></i>
      </span>
    </Container>
  );
};

export default NavBar;
