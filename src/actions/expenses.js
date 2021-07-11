import { v4 as uuid } from 'uuid';
// ACTIONS 
// 1- Add expenses 
const addExpense = (
    { description = '', note = '', amount = 0, createdAt = 0 } = {}
) => ( {
    type: 'ADD_EXPENSE',
    expenses: {
        id: uuid(),
        description: description,
        note: note,
        amount: amount,
        createdAt: createdAt
    }
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

export { addExpense, removeExpense, editExpense };