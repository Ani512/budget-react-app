import database from '../firebase/firebase';

// ACTIONS 

// 1- Add expenses 
const addExpense = ( expense ) => ( {
    type: 'ADD_EXPENSE',
    expenses: expense
} );

// 2- Remove Expense 
const removeExpense = (
    { id = undefined } = {}
) => ( {
    type: 'REMOVE_EXPENSE',
    expenses: {
        id: id,
    }
} );

// 3- Edit expenses 
const editExpense = ( id = undefined, updates ) => ( {
    type: 'EDIT_EXPENSE',
    id: id,
    updates
} );

const startAddExpense = ( expenseData = {} ) =>
{
    // Requires Redux Thunk
    // Thunk Helps in making Async Calls - First the firebase call is made and then the redux call is made 
    return ( dispatch ) =>
    {
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData;

        let expense = { description, note, amount, createdAt };
        database.ref( 'expenses' ).push( expense ).then( ( ref ) =>
        {
            dispatch( addExpense( { id: ref.key, ...expense } ) );
        } ).catch( ( error ) => console.log( error ) );
    };
};

export { addExpense, removeExpense, editExpense, startAddExpense };