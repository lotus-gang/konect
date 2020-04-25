import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/SupplyPlace/PlaceList";

const SupplyProduct = props => {
  const supplyId = useParams().supplyId;
  const SUPPLIERS = [
    {
      id: "s1",
      name: "Giang Garment Factory",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      imageUrl:
        "https://a.c-dn.net/b/4uot3B/headline_shutterstock_243762007.jpg",
      address: "Two",
      mobile: 68621169,
      available: true,
      location: {
        lat: 1.3265611,
        lng: 103.6823505
      }
    }
  ];
  const PRODUCTS = [
    {
      pid: "p1",
      sid: "s1",
      name: "Banana",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      available: true
    },
    {
      pid: "p2",
      sid: "s2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      name: "Apple",
      available: true
    },
    {
      pid: "p3",
      sid: "s2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      name: "Pear",
      available: false
    }
  ];
  const loadedSupplier = SUPPLIERS.find(supplier => supplier.id === supplyId);
  const loadedProduct = PRODUCTS.filter(product => product.sid === supplyId);
  return (
    <React.Fragment>
      <PlaceList supplier={loadedSupplier} products={loadedProduct} />
    </React.Fragment>
  );
};

export default SupplyProduct;
