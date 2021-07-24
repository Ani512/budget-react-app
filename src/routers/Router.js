import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import LoginPage from '../components/LoginPage';
import Create from '../components/CreateExpense';
import EditExpense from '../components/EditExpense';
import ExpenseDashboard from '../components/ExpenseDashboard';
import Help from '../components/Help';
import Page404 from '../components/NotFoundPage';
import { createBrowserHistory } from 'history';
import PrivateRouter from './PrivateRouter';
import PublicRouter from './PublicRouter';

export const history = createBrowserHistory();

class AppRouter extends React.Component
{
    render ()
    {
        return (
            <Router history={ history }>
                <Switch>
                    <PublicRouter exact path="/" component={ LoginPage } />
                    <PrivateRouter path="/dash" component={ ExpenseDashboard } />
                    <PrivateRouter path="/create" component={ Create } />
                    <PrivateRouter path="/edit/:id" component={ EditExpense } />
                    <Route path="/help" component={ Help } />
                    <Route component={ Page404 } />
                </Switch>
            </Router>
        );
    }
}

// :id , here, id is the variable 

export default AppRouter;