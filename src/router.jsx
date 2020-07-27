import React from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom'
import GameList from '@/pages/GameList/GameList'
import Identity from '@/pages/Identity/Identity'


const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Identity}/>
            <Route exact path="/GameList" component={GameList}/>
        </Switch>
    </HashRouter>
);


export default BasicRoute;