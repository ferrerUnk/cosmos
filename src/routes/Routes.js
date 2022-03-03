import React, { useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";

import ForgotPassword from "../views/forgot-password/ForgotPassword";
import ParentlineHome from "../views/parentline/home/ParentlineHome";
import Login from "../views/login/Login";

import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import { UserContext } from "../context/UserContext";
import PageLoader from "../components/loaders/PageLoader";
import AuthRoute from "./components/AuthRoute";
import PageNotFound from "../components/error_pages/PageNotFound";
import Messages from "../views/parentline/messages/Messages";
import Home from "../views/home/Home";
import Schools from "../views/parentline/schools/Schools";
import Groups from "../views/parentline/groups/Groups";
import Reports from "../views/parentline/reports/Reports";


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
            <AuthRoute path='/login' exact component={Login}/>
            <AuthRoute path='/forgot_password' exact component={ForgotPassword}/>
            
            <PrivateRoute path='/' exact component={Home}/>

            <PrivateRoute path='/parentline' exact component={ParentlineHome}/>
            <PrivateRoute path='/parentline/messages' exact component={Messages}/>
            <PrivateRoute path='/parentline/schools' exact component={Schools}/>
            <PrivateRoute path='/parentline/groups' exact component={Groups}/>
            <PrivateRoute path='/parentline/reports' exact component={Reports}/>

            <PublicRoute path='/404' exact component={PageNotFound}/>
            <Redirect to="/404"/>
          </Switch>
        </Router>)
      }
    </div>
  );
}
