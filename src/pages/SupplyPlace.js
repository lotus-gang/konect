import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/SupplyPlace/PlaceList";

const SupplyPlace = props => {
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
      open_hour: 9,
      close_hour: 18,
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
      open_hour: 9,
      close_hour: 18,
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
      description: "Best in the country",
      imageUrl:
        "https://article.images.consumerreports.org/f_auto/prod/content/dam/CRO%20Images%202018/Health/April/CR-Health-Inlinehero-bananas-good-for-you-0418"
    },
    {
      pid: "p2",
      sid: "s2",
      name: "Apple",
      description: "Best in the country",
      imageUrl:
        "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/health-benefits-of-apples-1296x728-feature.jpg?w=1155&h=1528"
    },
    {
      pid: "p3",
      sid: "s2",
      name: "Pear",
      description: "Best in the country",
      imageUrl:
        "https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/285/285430/two-pears-on-a-table.jpg?w=1155&h=1734"
    }
  ];
  const loadedSupplier = SUPPLIERS.find(supplier => supplier.id === supplyId);
  const loadedProduct = PRODUCTS.filter(product => product.sid === supplyId);
  return (
    <React.Fragment>
      <PlaceList items={loadedSupplier} products={loadedProduct} />
    </React.Fragment>
  );
};

export default SupplyPlace;
