import React from 'react';
import { connect } from 'react-redux';
import Item from './ExpenseListItem';
import { visibleExpenses } from '../selectors/expenses';

const ExpenseList = ( props ) => (
    <div>
        { props.expenses.map( ( expense ) => <Item expense={ expense } key={ expense.id } /> ) }
    </div>
);

const mapStateToProps = ( state ) =>
{
    return {
        expenses: visibleExpenses( state.expenses, state.filters ),
    };
};

// HOC
export default connect( mapStateToProps )( ExpenseList );