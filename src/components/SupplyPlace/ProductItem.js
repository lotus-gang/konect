import React, { useState, useContext } from "react";
import axios from "axios";

import Modal from "../../components/shared/UIElements/Modal";
import Button from "../../components/shared/FormElements/Button";
import "./ProductItem.css";
import { PROXYCORS } from "../../components/SearchBar";

const ProductItem = props => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [body, setBody] = useState();

  const showDeleteWarningHandler = () => {
    setShowConfirmModal(true);
  };
  const cancelDeleteHandler = () => {
    setShowConfirmModal(false);
  };
  const confirmDeleteHandler = () => {
    setShowConfirmModal(false);
    axios
      .delete(
        PROXYCORS +
          "https://coronabrainapi.herokuapp.com/products/" +
          props.id +
          "/"
      )
      .then(res => console.log(res))
      .catch(console.error);
  };

  const changeHandler = () => {
    setShowConfirmModal(false);
    axios
      .get(
        PROXYCORS +
          "https://coronabrainapi.herokuapp.com/products/" +
          props.id +
          "/"
      )
      .then(res => setBody(res.data));
    console.log(body);
    let data;
    if (body) {
      data = {
        id: body.id,
        product_name: body.product_name,
        product_description: body.description,
        product_available: !body.product_available,
        company: {
          url: body.company.url,
          company_name: body.company.company_name,
          company_desc: body.company.company_desc,
          company_address: body.company.company_address,
          company_lat: body.company.company_lat,
          company_long: body.company.company_long,
          company_open: body.company.company_open,
          company_number: body.company.company_number,
          company_email: body.company.company_email,
          company_logo_URL: body.company.company_logo_URL
        }
      };
      axios
        .patch(
          PROXYCORS +
            "https://coronabrainapi.herokuapp.com/products/" +
            props.id +
            "/",
          data
        )
        .then(res => console.log(res))
        .catch(console.error);
    }
    alert("Please do it again!");
  };

  return (
    <React.Fragment>
      <Modal
        show={showConfirmModal}
        onCancel={cancelDeleteHandler}
        header={props.name}
        footerClass="place-item__modal-actions"
        footer={
          props.available ? (
            <React.Fragment>
              <Button inverse onClick={cancelDeleteHandler}>
                Cancel
              </Button>
              <Button onClick={changeHandler}>Change to unavailable</Button>
              <Button danger onClick={confirmDeleteHandler}>
                Delete
              </Button>
            </React.Fragment>
          ) : (
            <Button onClick={changeHandler}>Change to unavailable</Button>
          )
        }
      >
        <p>{props.description}</p>
      </Modal>
      <li>
        <ul className="display" onClick={showDeleteWarningHandler}>
          <li>
            <div className="product-item__info">
              <h2>{props.name}</h2>
            </div>
          </li>
          <li>
            {props.available ? (
              <p className="available">Available</p>
            ) : (
              <p className="unavailable">Unavailable</p>
            )}
          </li>
        </ul>
        <hr />
      </li>
    </React.Fragment>
  );
};

export default ProductItem;
