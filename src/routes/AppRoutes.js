import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Addded Components
import App from '../App';
import Home from '../components/user/home/Home';
import UserContent from '../components/user/user-content/UserContent';
import Dashborad from '../components/user/dashboard/Dashborad';

const AppRoutes = () => 
    <App>
        <Switch>
            <Route exact path="/userContent" component={UserContent} />
            <Route exact path="/dashboard" component={Dashborad} />
            <Route exact path="/" component={Home}/>
        </Switch>
    </App>;

export default AppRoutes;