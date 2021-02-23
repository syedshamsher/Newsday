import React from 'react'
import { Switch, Route } from "react-router-dom";
import { Navbar } from '../Components/Navbar/Navbar';
import { Home } from '../Pages/Home/Home';
import { LatestNews } from '../Pages/LatestNews/LatestNews';
import { NewsByCategory } from '../Pages/NewsByCategory';
import { NewsBySource } from '../Pages/NewsBySource/NewsBySource';
import { Query } from '../Pages/Query/Query';


function Routes() {
    
    return (
        <div>
            <Route path="/" render={() => <Navbar />} />
            <Switch>
                <Route path="/" exact render={() => <Home /> } />
                <Route path="/latest" exact render={() => <LatestNews /> } />
                <Route path="/by-source" exact render={() => <NewsBySource /> } />
                <Route path="/by-category" exact render={() => <NewsByCategory /> } />
                <Route path="/query" exact render={() => <Query /> } />
            </Switch>
        </div>
    )
}

export { Routes }
