import React, { useState, useCallback } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Suppliers from "./pages/Suppliers";
import SupplyPlace from "./pages/SupplyPlace";
import NewSupply from "./pages/NewSupply";
import Auth from "./auth/pages/Auth";
import { AuthContext } from "./store/context/auth-context";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import BottomNav from "./components/BottomNav";

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
        <BottomNav />
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
