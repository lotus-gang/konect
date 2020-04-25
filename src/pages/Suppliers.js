import React, { useEffect } from "react";
import axios from "axios";

import SupplyList from "../components/Suppliers/SupplyList";

const Suppliers = () => {
  useEffect(() => {
    axios
      .get("https://coronabrainapi.herokuapp.com/companies")
      .then(response => {
        console.log(response);
      })
      .catch(console.error);
  });
  const SUPPLIERS = [
    {
      id: "s1",
      name: "Giang Garment Factory",
      imageUrl:
        "https://a.c-dn.net/b/4uot3B/headline_shutterstock_243762007.jpg",
      address: "8 Sixth Lok Yang Rd, Singapore 628106",
      mobile: 68621169,
      available: false,
      location: {
        lat: 1.3265611,
        lng: 103.6823505
      }
    },
    {
      id: "s2",
      name: "DBrandt Oilfield Services",
      imageUrl:
        "https://a.c-dn.net/b/4uot3B/headline_shutterstock_243762007.jpg",
      address: "8 Sixth Lok Yang Rd, Singapore 628106",
      mobile: 68621169,
      available: true,
      location: {
        lat: 1.3265611,
        lng: 103.6823505
      }
    }
  ];
  return <SupplyList items={SUPPLIERS} />;
};

export default Suppliers;
