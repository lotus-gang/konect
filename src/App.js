import React, { useState, useCallback } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import "./App.css";
import Suppliers from "./suppliers/pages/Suppliers";
import SupplyPlace from "./supplyplace/pages/SupplyPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import { AuthContext } from "./shared/context/auth-context";
import { SearchContext } from "./shared/context/search-context";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const search = useCallback(event => {
    setSearchValue(event.target.value);
  }, []);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  return (
    <SearchContext.Provider
      value={{ searchValue: searchValue, search: search }}
    >
      <AuthContext.Provider
        value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
      >
        <Router>
          <MainNavigation />
          <main>
            <Switch>
              <Route path="/" exact>
                <Suppliers />
              </Route>
              <Route path="/:supplyId">
                <SupplyPlace />
              </Route>
            </Switch>
          </main>
        </Router>
      </AuthContext.Provider>
    </SearchContext.Provider>
  );
}

export default App;
