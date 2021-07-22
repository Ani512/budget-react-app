import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';

const Create = ( props ) =>
(
    <div>
        <h2>Add Expense</h2>
        <ExpenseForm onAddExp={ ( expense ) =>
        {
            props.dispatch( startAddExpense( expense ) );
            props.history.push( '/dash' );
        } } />
    </div>
);

export default connect()( Create );