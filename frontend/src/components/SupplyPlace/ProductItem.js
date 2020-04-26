import React, { useState, useContext } from "react";

import Modal from "../../components/shared/UIElements/Modal";
import Button from "../../components/shared/FormElements/Button";
import "./ProductItem.css";

const ProductItem = props => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const showDeleteWarningHandler = () => {
    setShowConfirmModal(true);
  };
  const cancelDeleteHandler = () => {
    setShowConfirmModal(false);
  };
  const confirmDeleteHandler = () => {
    setShowConfirmModal(false);
    console.log("DELETING...");
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
              <Button danger onClick={confirmDeleteHandler}>
                Delete
              </Button>
            </React.Fragment>
          ) : (
            ""
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
