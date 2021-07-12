import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';
import manageExpenses from '../selectors/expenses';

const Create = ( props ) =>
(
    <div>
        <h2>Add Expense</h2>
        <ExpenseForm onAddExp={ ( expense ) =>
        {
            props.dispatch( addExpense( expense ) );
            props.history.push( '/dash' );
        } } />
    </div>
);

let mapStateToProps = ( state ) =>
{
    return {
        expenses: manageExpenses( state.expenses, state.filters )
    };
};

export default connect( mapStateToProps )( Create );