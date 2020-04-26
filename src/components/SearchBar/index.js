import React, { useState, useReducer, useContext } from "react";
import { Container, FormControl } from "react-bootstrap";
import "../../styles/components/SearchBar/index.css";
import axios from "axios";
import {
  searchStateInit,
  searchReducer,
  SearchContext,
} from "../../store/context/search-context";

export const PROXYCORS = "https://cors-anywhere.herokuapp.com/";

const NavBar = (props) => {
  const searchContext = useContext(SearchContext);
  const { dispatch } = searchContext;
  const [value, setValue] = useState("");

  const changeInput = (e) => {
    setValue(e.target.value);
  };
  const search = (e) => {
    e.preventDefault();
    axios
      .get(PROXYCORS + `https://coronabrainapi.herokuapp.com/search/${value}`)
      .then((res) => {
        dispatch({
          type: "SET_DATA",
          data: res.data,
        });
        // console.log(res.data);
      })
      .catch(console.error);
  };

  return (
    <Container className="search-bar">
      <FormControl
        className="search-input"
        value={value}
        onChange={changeInput}
      />
      <span className="search-icon" onClick={search}>
        <i className="fas fa-search"></i>
      </span>
    </Container>
  );
};

export default NavBar;
