import React, { useState, useReducer } from "react";
import { Container, FormControl } from "react-bootstrap";
import "../../styles/components/SearchBar/index.css";
import "./index.css";
import { Link } from "react-router-dom";
import {
  searchReducer,
  searchStateInit,
} from "../../store/context/search-context";

const FilterBar = (props) => {
  const [state, dispatch] = useReducer(searchReducer, searchStateInit);
  const { data } = state;
  console.log("data", data);
  return (
    <Container className="filter-bar text-body">
      <div className="total-suppliers">
        {data.length != 0 ? data.length : 0} suppliers found
      </div>
      <Link className="filter text-link text-body">
        Filter {"  "}
        <i className="fas fa-filter"></i>
      </Link>
    </Container>
  );
};

export default FilterBar;
