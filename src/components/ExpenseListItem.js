import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const Item = ( props ) => (
    <div>
        <Link to={ `/edit/${ props.expense.id }` }>
            <h4>{ props.expense.description }</h4>
        </Link>
        <p>{ numeral( props.expense.amount ).format( '$0,0.00' ) } on { moment( props.expense.createdAt ).format( 'MMMM Do, YYYY' ) }</p>
    </div>
);
export default Item;