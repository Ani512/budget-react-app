import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import expensesReducer from "../reducers/expenses";
import filtersReducer from "../reducers/filters";
import UserAuthDetailsReducer from "../reducers/auth";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () =>
{
    const store = createStore(
        combineReducers( {
            expenses: expensesReducer,
            filters: filtersReducer,
            auth: UserAuthDetailsReducer
        } ),
        composeEnhancers( applyMiddleware( thunk ) ),   // Helps in adding middleware
    );

    return store;
};