import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from '../components/LoginPage';
import Create from '../components/CreateExpense';
import EditExpense from '../components/EditExpense';
import ExpenseDashboard from '../components/ExpenseDashboard';
import Help from '../components/Help';
import Page404 from '../components/NotFoundPage';
import Header from '../components/Header';

class Router extends React.Component
{
    render ()
    {
        return (
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path="/" component={ LoginPage } />
                    <Route exact path="/dash" component={ ExpenseDashboard } />
                    <Route path="/create" component={ Create } />
                    <Route path="/edit/:id" component={ EditExpense } />
                    <Route path="/help" component={ Help } />
                    <Route component={ Page404 } />
                </Switch>
            </BrowserRouter>
        );
    }
}

// :id , here, id is the variable 

export default Router;