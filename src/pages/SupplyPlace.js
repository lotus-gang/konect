import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

const SupplyPlace = props => {
  const supplyId = useParams().supplyId;
  const SUPPLIERS = [
    {
      id: "p1",
      industry: "oil",
      name: "Giang Garment Factory",
      imageUrl:
        "https://a.c-dn.net/b/4uot3B/headline_shutterstock_243762007.jpg",
      address: "8 Sixth Lok Yang Rd, Singapore 628106",
      mobile: 68621169,
      open_hour: 9,
      close_hour: 18,
      location: {
        lat: 1.3265611,
        lng: 103.6823505
      }
    },
    {
      id: "p2",
      industry: "oil",
      name: "DBrandt Oilfield Services",
      imageUrl:
        "https://a.c-dn.net/b/4uot3B/headline_shutterstock_243762007.jpg",
      address: "Two",
      mobile: 68621169,
      open_hour: 9,
      close_hour: 18,
      location: {
        lat: 1.3265611,
        lng: 103.6823505
      }
    }
  ];
  const loadedPlaces = SUPPLIERS.filter(place => place.id === supplyId);
  return <PlaceList items={loadedPlaces} />;
};

export default SupplyPlace;
