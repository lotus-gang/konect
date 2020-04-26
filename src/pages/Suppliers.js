import React, { useState, useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SupplyList from "../components/Suppliers/SupplyList";
import { PROXYCORS } from "../components/SearchBar";
import {
  searchReducer,
  searchStateInit
} from "../store/context/search-context";

const Suppliers = () => {
  const [state, dispatch] = useReducer(searchReducer, searchStateInit);
  const { data } = state;
  console.log(data);
  useEffect(() => {
    axios
      .get(PROXYCORS + "https://coronabrainapi.herokuapp.com/companies")
      .then(res => {
        // this.setState({})

        dispatch({
          type: "SET_DATA",
          data: res.data
        });
      })
      .catch(console.error);
  }, []);
  // const SUPPLIERS = [
  //   {
  //     id: "s1",
  //     name: "Giang Garment Factory",
  //     imageUrl:
  //       "https://a.c-dn.net/b/4uot3B/headline_shutterstock_243762007.jpg",
  //     address: "8 Sixth Lok Yang Rd, Singapore 628106",
  //     mobile: 68621169,
  //     available: false,
  //     location: {
  //       lat: 1.3265611,
  //       lng: 103.6823505,
  //     },
  //   },
  //   {
  //     id: "s2",
  //     name: "DBrandt Oilfield Services",
  //     imageUrl:
  //       "https://a.c-dn.net/b/4uot3B/headline_shutterstock_243762007.jpg",
  //     address: "8 Sixth Lok Yang Rd, Singapore 628106",
  //     mobile: 68621169,
  //     available: true,
  //     location: {
  //       lat: 1.3265611,
  //       lng: 103.6823505,
  //     },
  //   },
  // ];
  return data.length != 0 && <SupplyList items={data} />;
};

export default Suppliers;
