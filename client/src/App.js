import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import MapPage from "./pages/map.js";
import SignUpPage from "./pages/signUp.js";
//import UserContext from "./utils/authContext";
import RegisterPage from "./pages/register";
import Profile from "./pages/profile";
import ProvideAuth from "./Provider/ProvideAuth";
import AuthButton from "./components/AuthButton/AuthButton.js";
import PrivateRoute from "./Provider/PrivateRoute.js";
import ProtectedPage from "./pages/ProtectedPage.js";
import LoginPage from "./pages/LoginPage.js";
import PublicPage from "./pages/PublicPage.js";

// ***** ROUTERS ******
// =============================================================
function App() {
  return (
    <ProvideAuth>
      <Router>
        <Switch>
          <Route path="/public" component={SignUpPage}></Route>
          <Route path="/login" component={LoginPage}></Route>
          <Route path="/register" component={RegisterPage}></Route>
          <PrivateRoute path="/map">
            <MapPage />
          </PrivateRoute>
        </Switch>
      </Router>
    </ProvideAuth>
  );
}
export default App;
