import React, { useState, useContext } from "react";

import Card from "../../shared/components/UIElements/Card";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import { AuthContext } from "../../shared/context/auth-context";
import Map from "../../shared/components/UIElements/Map";
import getCoordsForAddress from "../../shared/components/UIElements/location";
import "./Auth.css";

const Auth = () => {
  const auth = useContext(AuthContext);
  const [isLoginMode, setIsLoginMode] = useState(true);

  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: "",
        isValid: false
      },
      password: {
        value: "",
        isValid: false
      }
    },
    false
  );

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined,
          company: undefined,
          address: undefined
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: "",
            isValid: false
          }
        },
        false
      );
    }
    setIsLoginMode(prevMode => !prevMode);
  };

  const authSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs);
    auth.login();
  };

  const map = (
    <div>
      <div className="map-container">
        <Map center={{ lat: 1.286747, lng: 103.852297 }} zoom={16} />
      </div>
    </div>
  );

  return (
    <Card className="authentication">
      {isLoginMode ? (
        <h2 className="one">Log in</h2>
      ) : (
        <h2 className="one">Sign up</h2>
      )}

      <form onSubmit={authSubmitHandler}>
        {!isLoginMode && (
          <Input
            element="input"
            id="name"
            type="text"
            label="Your Name"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a name."
            onInput={inputHandler}
            placeholder="Your Name"
          />
        )}
        <Input
          element="input"
          id="email"
          type="email"
          label="E-Mail"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Please enter a valid email address."
          onInput={inputHandler}
          placeholder="Your Email"
        />
        <Input
          element="input"
          id="password"
          type="password"
          label="Password"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid password, at least 5 characters."
          onInput={inputHandler}
          placeholder="Password"
        />
        {!isLoginMode && (
          <React.Fragment>
            <Input
              element="input"
              id="company"
              type="text"
              label="Company"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter a company name."
              onInput={inputHandler}
              placeholder="Your Company Name"
            />
            <Input
              element="input"
              id="address"
              type="text"
              label="Address"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter an address."
              onInput={inputHandler}
              placeholder="Your Address"
            />
            {map}
          </React.Fragment>
        )}

        {!isLoginMode ? (
          <p className="terms">
            By signing up, you agreed with our Terms of Services and Privacy
            Policy.
          </p>
        ) : (
          <p className="forgot">Forgot your password?</p>
        )}
        <div className="center2">
          <Button type="submit" disabled={!formState.isValid}>
            {isLoginMode
              ? "\xa0\xa0\xa0\xa0\xa0\xa0" +
                "Log in" +
                "\xa0\xa0\xa0\xa0\xa0\xa0"
              : "\xa0\xa0\xa0\xa0\xa0\xa0" +
                "Sign up" +
                "\xa0\xa0\xa0\xa0\xa0\xa0"}
          </Button>
        </div>
      </form>
      <div className="center">
        <div>
          {!isLoginMode ? (
            <p className="p">
              Already have account? &nbsp;&nbsp;
              <a className="login" onClick={switchModeHandler}>
                Log in
              </a>{" "}
            </p>
          ) : (
            <p className="p">
              Don't have an account? &nbsp;&nbsp;
              <a className="login" onClick={switchModeHandler}>
                Sign up
              </a>{" "}
            </p>
          )}
        </div>
      </div>
    </Card>
  );
};

export default Auth;
