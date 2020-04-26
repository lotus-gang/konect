import React from "react";
import axios from "axios";

import Input from "../components/shared/FormElements/Input";
import Card from "../components/shared/UIElements/Card";
import Button from "../components/shared/FormElements/Button";
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from "../util/validators";
import { useForm } from "../store/hooks/form-hook";
import "./PlaceForm.css";

export const PROXYCORS = "https://cors-anywhere.herokuapp.com/";

const NewPlace = () => {
  const [formState, inputHandler] = useForm(
    {
      name: {
        value: "",
        isValid: false
      },
      description: {
        value: "",
        isValid: false
      }
    },
    false
  );

  const placeSubmitHandler = event => {
    event.preventDefault();
    const post = {
      product_name: formState.inputs.name.value,
      product_description: formState.inputs.name.value,
      product_available: true
    };
    axios
      .post(PROXYCORS + "http://coronabrainapi.herokuapp.com/products/", post)
      .then(response => console.log(response));
    // console.log(formState.inputs.name.value); // send this to the backend!
  };

  return (
    <Card className="supply">
      <h2 className="one">Add Product</h2>
      <form className="place-form" onSubmit={placeSubmitHandler}>
        <Input
          id="name"
          element="input"
          type="text"
          label="Title"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid title."
          onInput={inputHandler}
          placeholder="Supply Name"
        />
        <Input
          id="description"
          element="textarea"
          label="Description"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid description (at least 5 characters)."
          onInput={inputHandler}
          placeholder="Description"
        />

        <div className="add">
          <span />
          <span />
          <Button type="submit" disabled={!formState.isValid}>
            Add Product
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default NewPlace;
