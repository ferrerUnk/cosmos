import React, { useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";

import ForgotPassword from "../views/forgot-password/ForgotPassword";
import Home from "../views/home/Home";
import Login from "../views/login/Login";

import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import { UserContext } from "../context/UserContext";
import PageLoader from "../components/loaders/PageLoader";
import AuthRoute from "./components/AuthRoute";
import PageNotFound from "../components/error_pages/PageNotFound";


export default function Routes() {
  const userContext = useContext(UserContext);
  const {loading, refreshUser} = userContext.data

  useEffect(() => {
    // refreshUser()
  }, [])

  return (
    <div className="content">
      {loading ? <PageLoader/> : 
        (<Router>
          <Switch>
            <PrivateRoute path='/' exact component={Home}/>
            <AuthRoute path='/login' exact component={Login}/>
            <AuthRoute path='/forgot_password' exact component={ForgotPassword}/>
            <PublicRoute path='/404' exact component={PageNotFound}/>
            <PrivateRoute path='/' exact component={Home}/>
            <Redirect to="/404"/>
          </Switch>
        </Router>)
      }
    </div>
  );
}
