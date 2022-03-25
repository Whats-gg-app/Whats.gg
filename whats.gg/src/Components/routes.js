import React from "react";
import { Route, Switch  } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Header from "./Layout/Header";
import Main from "../Main";
import Duo from "../Containers/Duo";
import Community from "../Containers/Community";
import MultiSearch from "../Containers/MultiSearch";
import Test from "../Containers/Test";

function Routers() {
    return (
        <BrowserRouter>
        <Header />
            <Switch>

                <Route exact path="/" component={Main} />

                <Route exact path="/duo" component={Duo} />

                <Route exact path="/community" component={Community} />

                <Route exact path="/multisearch" component={MultiSearch} />

                <Route exact path="/test" component={Test} />
                
            </Switch>
        </BrowserRouter>
            
        
       
        
    )
}

export default Routers