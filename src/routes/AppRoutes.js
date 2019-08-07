import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Addded Components
import App from '../App';
import Home from '../components/user/home/Home';
import UserContent from '../components/user/user-content/UserContent';
import Dashborad from '../components/user/dashboard/Dashborad';
import Users from '../components/admin/user/Users';
import Article from '../components/admin/article/Article';
import NewArticle from '../redux/_containers/_article/newArticle'

const AppRoutes = () =>
    <App>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/userContent" component={UserContent} />
            <Route exact path="/dashboard" component={Dashborad} />
            <Route exact path="/admin/users" component={Users} />
            <Route exact path="/admin/articles" component={Article} />
            <Route exact path="/admin/article/:id" component={NewArticle} />
        </Switch>
    </App>;

export default AppRoutes;