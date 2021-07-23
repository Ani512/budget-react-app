import database from '../firebase/firebase';

// ACTIONS 

// 1- Add expenses 
const addExpense = ( expenses ) => ( {
    type: 'ADD_EXPENSE',
    expenses: expenses
} );

const startAddExpenses = ( expenseData ) =>
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

// 2- Remove Expense 
const removeExpense = (
    { id = undefined } = {}
) => ( {
    type: 'REMOVE_EXPENSE',
    expenses: {
        id: id,
    }
} );

const startRemoveExpense = ( id ) =>
{
    return ( dispatch ) =>
    {
        database.ref( `expenses/${ id }` ).remove().then( () =>
        {
            dispatch( removeExpense( { id: id } ) );
        } ).catch( ( error ) =>
        {
            console.log( error );
        } );
    };
};

// 3- Edit expenses 
const editExpense = ( id = undefined, updates ) => ( {
    type: 'EDIT_EXPENSE',
    id: id,
    updates
} );

const startUpdateExpense = ( id, expenses ) =>
{
    return ( dispatch ) =>
    {
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenses;

        let updates = { description, note, amount, createdAt };

        database.ref( `expenses/${ id }` ).update( updates ).then( () =>
        {
            dispatch( editExpense( id, updates ) );
        } ).catch( ( error ) =>
        {
            console.log( error );
        } );
    };
};

// 4- Set Expenses
const setExpense = ( expenses ) => (
    {
        type: 'SET_EXPENSE',
        expenses: expenses
    } );

const startSetExpenses = () =>
{
    let expenses = [];
    return ( dispatch ) =>
    {
        return database.ref( 'expenses' ).once( 'value' ).then( ( snapshot ) =>
        {
            snapshot.forEach( ( child ) =>
            {
                expenses.push( {
                    id: child.key,
                    ...child.val()
                } );
            } );

            dispatch( setExpense( expenses ) );
        } );
    };
};

export { addExpense, removeExpense, editExpense, setExpense, startAddExpenses, startSetExpenses, startRemoveExpense, startUpdateExpense };