import React, { useState, useContext } from "react";

import Card from "../../shared/components/UIElements/Card";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";

const Auth = () => {
  return (
    <React.Fragment>
      <Card>
        <h2>Login Required</h2>
        <hr />
        <Input></Input>
      </Card>
    </React.Fragment>
  );
};

export default Auth;
