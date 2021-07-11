import React from 'react';
import { connect } from 'react-redux';
import Item from './ExpenseListItem';
import manageExpenses from '../selectors/expenses';

const ExpenseList = ( props ) => (
    <div>
        <h1>ExpenseList</h1>
        { props.expenses.map( ( expense ) => <Item expense={ expense } key={ expense.id } /> ) }
    </div>
);

const mapStateToProps = ( state ) =>
{
    return {
        expenses: manageExpenses( state.expenses, state.filters )
    };
};

// HOC
export default connect( mapStateToProps )( ExpenseList );