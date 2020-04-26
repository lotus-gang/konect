import React, { useCallback, useReducer, useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Auth from "./auth/pages/Auth";
import BottomNav from "./components/BottomNav";
import FilterBar from "./components/FilterBar";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import NewSupply from "./pages/NewSupply";
import Suppliers from "./pages/Suppliers";
import SupplyPlace from "./pages/SupplyPlace";
import { AuthContext } from "./store/context/auth-context";
import {
  SearchContext,
  searchStateInit,
  searchReducer,
} from "./store/context/search-context";

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
        <Route path="/:supplyId/products" exact>
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
        <Route path="/:supplyId/products" exact>
          <SupplyPlace />
        </Route>
        <Route path="/auth" exact>
          <Auth />
        </Route>
        <Redirect to="/auth" />
      </Switch>
    );
  }

  const [state, dispatch] = useReducer(searchReducer, searchStateInit);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <SearchContext.Provider value={{ state, dispatch }}>
        <Router>
          <NavBar />
          <SearchBar />

          <div className="main-content">
            <FilterBar />
            {routes}
          </div>
          <BottomNav />
        </Router>
      </SearchContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
