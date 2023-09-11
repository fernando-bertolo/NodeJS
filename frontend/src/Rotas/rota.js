import React from "react";
import {Route, BrowserRouter, Switch, Navigate} from "react-router-dom";

import Login from "../components/Login/indexLogin";
import Dashboard from "../components/Dashboard/indexDashboard";

const Rotas = () => {
    return(
        <BrowserRouter>
                <Route exact path="/login" Component={Login}/>
                <Route exact path="/dashboard" Component={Dashboard}/>
        </BrowserRouter>
    );
};

export default Rotas