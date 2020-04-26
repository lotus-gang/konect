import React, { useState, useEffect, useReducer, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SupplyList from "../components/Suppliers/SupplyList";
import { PROXYCORS } from "../components/SearchBar";
import {
  searchReducer,
  searchStateInit,
  SearchContext,
} from "../store/context/search-context";

const Suppliers = () => {
  const searchContext = useContext(SearchContext);
  const { state, dispatch } = searchContext;
  const { data } = state;
  // console.log(dispatch);
  useEffect(() => {
    axios
      .get(PROXYCORS + "https://coronabrainapi.herokuapp.com/companies")
      .then((res) => {
        dispatch({
          type: "SET_DATA",
          data: res.data,
        });
      })
      .catch(console.error);
  }, []);

  return data.length != 0 && <SupplyList items={data} />;
};

export default Suppliers;
