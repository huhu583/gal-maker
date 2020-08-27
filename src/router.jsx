import React from 'react'
import {BrowserRouter as MyRouter, Route, Switch} from 'react-router-dom'
import Login from '@/pages/Login/Login'
import GameList from '@/pages/GameList/GameList'
import Identity from '@/pages/Identity/Identity'
import DesignerMain from '@/pages/DesignerMain/DesignerMain'
import CreateGame from '@/pages/CreateGame/CreateGame'
import Menu from '@/pages/Menu/Menu'
import SaveOrLoadGame from '@/pages/SaveOrLoadGame/SaveOrLoadGame'


const BasicRoute = () => (
    <MyRouter>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/Identity" component={Identity}/>
            <Route exact path="/GameList" component={GameList}/>
            <Route exact path="/DesignerMain" component={DesignerMain}/>
            <Route exact path="/Menu" component={Menu}/>
            <Route exact path="/CreateGame" component={CreateGame} />
        </Switch>
    </MyRouter>
);


export default BasicRoute;