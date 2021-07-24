import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import LoginPage from '../components/LoginPage';
import Create from '../components/CreateExpense';
import EditExpense from '../components/EditExpense';
import ExpenseDashboard from '../components/ExpenseDashboard';
import Help from '../components/Help';
import Page404 from '../components/NotFoundPage';
import Header from '../components/Header';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

class AppRouter extends React.Component
{
    render ()
    {
        return (
            <Router history={ history }>
                <Header />
                <Switch>
                    <Route exact path="/" component={ LoginPage } />
                    <Route exact path="/dash" component={ ExpenseDashboard } />
                    <Route path="/create" component={ Create } />
                    <Route path="/edit/:id" component={ EditExpense } />
                    <Route path="/help" component={ Help } />
                    <Route component={ Page404 } />
                </Switch>
            </Router>
        );
    }
}

// :id , here, id is the variable 

export default AppRouter;

// {/* <Route exact path="/dash/" component={ LoginPage } /> */ }