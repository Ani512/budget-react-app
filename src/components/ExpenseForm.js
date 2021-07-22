import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class ExpenseForm extends React.Component
{
    // constructor written because the expense form should show previous data in edit mode 
    constructor ( props )
    {
        super( props ); // Access to this keyword 

        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? props.expense.amount.toString() : '',
            createdAt: props.expense ? moment( props.expense.createdAt ) : moment(),
            calenderFocused: false,
            error: undefined
        };
    }
    onDescriptionChange = ( e ) =>
    {
        this.setState( () => ( { description: e.target.value } ) );
    };
    onNoteChange = ( e ) =>
    {
        this.setState( () => ( { note: e.target.value } ) );
    };
    onAmountChange = ( e ) =>
    {
        const amount = e.target.value;
        if ( !amount || amount.match( /^\d{1,}(\.\d{0,2})?$/ ) )
        {
            this.setState( () => ( { amount: amount } ) );
        };
    };
    onDateChange = ( createdAt ) =>
    {
        if ( createdAt ) this.setState( () => ( { createdAt: createdAt } ) );
    };
    onFocusChange = ( { focused } ) =>
    {
        this.setState( () => ( { calenderFocused: focused } ) );
    };
    addExpenseToDash = ( e ) =>
    {
        e.preventDefault();
        if ( !this.state.amount || !this.state.description )
        {
            this.setState( () => ( { error: 'Not Enough Data to Add Expense' } ) );
        } else
        {
            this.setState( () => ( { error: undefined } ) );

            this.props.onAddExp( {
                description: this.state.description,
                amount: parseFloat( this.state.amount, 10 ),
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            } );
        }

    };
    render ()
    {
        return (
            <div>
                <form onSubmit={ this.addExpenseToDash }>
                    <input type="text" placeholder="description" autoFocus={ true } value={ this.state.description } onChange={ this.onDescriptionChange }></input>
                    <input type="text" placeholder="amount" value={ this.state.amount } onChange={ this.onAmountChange }></input>
                    <SingleDatePicker
                        date={ this.state.createdAt }
                        onDateChange={ this.onDateChange }
                        focused={ this.state.calenderFocused }
                        onFocusChange={ this.onFocusChange }
                        numberOfMonths={ 1 }
                        isOutsideRange={ () => false }
                    />
                    <textarea placeholder="(optional) Note about the expense" value={ this.state.note } onChange={ this.onNoteChange }></textarea>
                    <button className="btn btn-outline-secondary">Add Expense</button>
                    { this.state.error ? <p>{ this.state.error }</p> : '' }
                </form>
            </div>
        );
    }
}

export default ExpenseForm;