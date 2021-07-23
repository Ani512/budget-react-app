import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startRemoveExpense, startUpdateExpense } from '../actions/expenses';

const EditExpense = ( props ) =>
{
    return (
        <div>
            <ExpenseForm
                onAddExp={ ( expense ) =>
                {
                    props.dispatch( startUpdateExpense( props.expenses.id, expense ) );
                    props.history.push( '/dash' );
                } }
                expense={ props.expenses } />
            <button className="btn btn-danger mb-3 me-2 btn-sm" onClick={ () =>
            {
                props.dispatch( startRemoveExpense( props.expenses.id ) );
                props.history.push( '/dash' );
            } }>Remove</button>
        </div>
    );
};

let mapStateToProps = ( state, props ) =>
{
    return {
        expenses: state.expenses.find( ( expense ) => expense.id === props.match.params.id )
    };
};

export default connect( mapStateToProps )( EditExpense );