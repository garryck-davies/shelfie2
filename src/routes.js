import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';



export default (
    <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/form" component={Form} />
        <Route path="/header" component={Header} />
    </Switch>
    
)