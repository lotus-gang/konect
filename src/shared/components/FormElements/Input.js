import React, { useReducer, useEffect } from "react";

// import getCoordsForAddress from "../UIElements/location";
import axios from "axios";
import Map from "../UIElements/Map";
import { validate } from "../../util/validators";
import "./Input.css";

const API_KEY = "AIzaSyDMpmORBdsUlsZpKTr-REU-8Hqw7qh9t78";

const getCoordsForAddress = async address => {
  const response = await axios
    .get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
        address
      )}&key=${API_KEY}`
    )
    .catch(console.error);
  const data = response.data;
  const coordinate = data.results[0].geometry.location;
  return console.log(coordinate);
  // .then(response => {
  //   return response.data.results[0].geometry.location;
  // })
  // .catch(console.error);
};

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators)
      };
    case "TOUCH": {
      return {
        ...state,
        isTouched: true
      };
    }
    default:
      return state;
  }
};

const Input = props => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || "",
    isTouched: false,
    isValid: props.initialValid || false
  });
  const { id, onInput } = props;
  const { value, isValid } = inputState;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  const changeHandler = event => {
    dispatch({
      type: "CHANGE",
      val: event.target.value,
      validators: props.validators,
      id: props.id
    });
  };

  const touchHandler = () => {
    dispatch({
      type: "TOUCH"
    });
  };

  const element =
    props.element === "input" ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 3}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
        placeholder={props.placeholder}
      />
    );

  return (
    <div
      className={`form-control ${!inputState.isValid &&
        inputState.isTouched &&
        "form-control--invalid"}`}
    >
      {element}
      {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
    </div>
  );
};

export default Input;
