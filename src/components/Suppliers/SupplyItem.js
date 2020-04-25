import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SupplyItem.css";


const SupplyItem = props => {
  return (
    <div className="user-item">
      <Link to={`/${props.id}`}>
        {/* <Container> */}
        <Row>
          <Col xs={5} className="user-item__image no-padding">
            <img src={props.image} alt={props.name} />
          </Col>
          <Col xs={7} className="user-item__info no-padding">
<<<<<<< HEAD
            <h2 className="text-title">{props.name}</h2>
            <h3 className="text-body">{props.address}</h3>
=======
            <h2>{props.name}</h2>
            <h3>{props.address}</h3>

>>>>>>> origin/styleDetails
            <span>Open now</span>
          </Col>
        </Row>

        {/* </Container> */}
      </Link>
    </div>
  );
};

export default SupplyItem;
