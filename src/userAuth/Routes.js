import React from "react";
import {Route, Switch} from "react-router-dom";
import AuthenticatedRoute from "./AuthenticateRoute";
import Dasboard from "../containers/dashboard/Dashboard";
import NotFound from "../components/notFound/NotFound";

export default({childProps}) => {
    return (
        <Switch>
            // TODO login route need to implement
            <AuthenticatedRoute path="/" exact component={Dasboard} props={childProps}/>
            <Route component={NotFound} />
        </Switch>
    )
}
