import React, { useState, useCallback } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import "./App.css";
import Suppliers from "./pages/Suppliers";
import SupplyPlace from "./pages/SupplyPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import NewSupply from "./pages/NewSupply";
import Auth from "./auth/pages/Auth";
import { AuthContext } from "./shared/context/auth-context";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Suppliers />
        </Route>
        <Route path="/:supplyId" exact>
          <SupplyPlace />
        </Route>
        <Route path="/supply/new" exact>
          <NewSupply />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Suppliers />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Route path="/:supplyId" exact>
          <SupplyPlace />
        </Route>
        <Redirect to="/auth" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <Router>
        <NavBar />
        <SearchBar />
        <main>{routes}</main>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
