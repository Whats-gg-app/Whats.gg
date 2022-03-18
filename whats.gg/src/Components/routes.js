import React from "react";
import { Route, Switch  } from "react-router-dom";
import Main from "../Main";
import Duo from "../Containers/Duo";
import Community from "../Containers/Community";
import MultiSearch from "../Containers/MultiSearch";
import { BrowserRouter } from "react-router-dom";
import Header from "./Layout/Header";

function Routers() {
    return (
        <BrowserRouter>
        <Header />
            <Switch>

                <Route exact path="/" component={Main} />

                <Route exact path="/duo" component={Duo} />

                <Route exact path="/community" component={Community} />

                <Route exact path="/multisearch" component={MultiSearch} />

            </Switch>
        </BrowserRouter>
            
        
       
        
    )
}

export default Routers