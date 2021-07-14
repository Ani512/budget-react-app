import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const Item = ( props ) => (
    <div>
        <Link to={ `/edit/${ props.expense.id }` }>
            <h4>{ props.expense.description }</h4>
        </Link>
        <p>${ props.expense.amount } on { moment( props.expense.createdAt ).format( 'MMMM Do YYYY' ) }</p>
    </div>
);
export default Item;