import React from 'react';
import { connect } from 'react-redux';
import manageExpenses from '../selectors/expenses';
import { removeExpense } from '../actions/expenses';

const Item = ( props ) => (
    <div>
        <h4>{ props.expense.description }</h4>
        <p>${ props.expense.amount } on { props.expense.createdAt }</p>
        <button className="btn btn-danger mb-3" onClick={ () =>
        {
            props.dispatch( removeExpense( { id: props.expense.id } ) );
        } }>Remove</button>
    </div>
);

let mapStateToProps = ( state ) =>
{
    return {
        expenses: manageExpenses( state.expenses, state.filters )
    };
};

export default connect( mapStateToProps )( Item );