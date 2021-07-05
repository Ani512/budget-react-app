import React from 'react';

const EditExpense = ( props ) =>
{
    return (
        <div>
            <p>Editing the Expense with id { props.match.params.id }</p>
        </div>
    );
};

export default EditExpense;