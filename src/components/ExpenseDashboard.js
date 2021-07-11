import React from 'react';
import ExpenseList from './ExpenseList';
import { setFilterText } from '../actions/filters';
import { connect } from 'react-redux';
import { sortByAmount, sortByDate } from '../actions/filters';


class ExpenseDashboard extends React.Component
{
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
    render ()
    {
        return (
            <div>
                <select className="form-select" onChange={ this.handleSortBy }>
                    <option defaultValue>Sort By</option>
                    <option value="amount">Amount</option>
                    <option value="date">Date</option>
                </select>
                <form className="input-group mb-3" onSubmit={ ( e ) => e.preventDefault() }>
                    <span className="input-group-text">Text Filter</span>
                    <input type="text" className="form-control" name="filter" value={ this.props.filters.text } onChange={ this.handleTextFilter }></input>
                </form>
                <ExpenseList />
            </div>
        );
    }
}

const mapStateToProps = ( state ) =>
{
    return {
        filters: state.filters
    };
};

export default connect( mapStateToProps )( ExpenseDashboard );