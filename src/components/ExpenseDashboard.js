import React from 'react';
import ExpenseList from './ExpenseList';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { sortByAmount, sortByDate, setStartDate, setEndDate, setFilterText } from '../actions/filters';
import { visibleExpenses, totalExpenses, totalNumberOfExpenses } from '../selectors/expenses';
import numeral from 'numeral';

class ExpenseDashboard extends React.Component
{
    state = {
        calenderFocused: null,
    };
    handleTextFilter = ( e ) =>
    {
        this.props.dispatch( setFilterText( { text: e.target.value } ) );
    };
    handleSortBy = ( e ) =>
    {
        e.preventDefault();
        if ( e.target.value.toLowerCase() === 'amount' )
        {
            this.props.dispatch( sortByAmount() );
        } else if ( e.target.value.toLowerCase() === 'date' )
        {
            this.props.dispatch( sortByDate() );
        }
    };
    // onDatesChange = ( { startDate, endDate } ) =>
    // {
    //     this.props.dispatch( setStartDate( { startDate: startDate } ) );
    //     this.props.dispatch( setEndDate( { endDate: endDate } ) );
    // };
    // onFocusChange = ( calenderFocused ) =>
    // {
    //     this.setState( () => ( { calenderFocused: calenderFocused } ) );
    // };
    render ()
    {
        return (
            <div>
                <select className="form-select" onChange={ this.handleSortBy }>
                    {/* <option defaultValue>Sort By - </option> */ }
                    <option defaultValue value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                {/* <DateRangePicker
                    startDate={ this.props.filters.startDate }
                    endDate={ this.props.filters.endDate }
                    onDatesChange={ this.onDatesChange }
                    focusedInput={ this.state.calenderFocused }
                    onFocusChange={ this.onFocusChange }
                /> */}
                <form className="input-group mb-3" onSubmit={ ( e ) => e.preventDefault() }>
                    <span className="input-group-text">Text Filter</span>
                    <input type="text" className="form-control" name="filter" value={ this.props.filters.text } onChange={ this.handleTextFilter }></input>
                </form>
                { this.props.totalNumberOfExpenses > 0
                    ? <h3>Viewing { this.props.totalNumberOfExpenses } expense/s totalling up to { numeral( this.props.totalExpenses ).format( '$0,0.00' ) }</h3>
                    : <h3>No Expenses</h3>
                }
                <ExpenseList />
            </div>
        );
    }
}

const mapStateToProps = ( state ) =>
{
    let currentExpenses = visibleExpenses( state.expenses, state.filters );
    return {
        filters: state.filters,
        totalExpenses: totalExpenses( currentExpenses ),
        totalNumberOfExpenses: totalNumberOfExpenses( currentExpenses )
    };
};

export default connect( mapStateToProps )( ExpenseDashboard );