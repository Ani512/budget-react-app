let expenseReducerDefaultState = [];
const expensesReducer = ( state = expenseReducerDefaultState, action ) =>
{
    switch ( action.type )
    {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expenses
            ];
        case 'REMOVE_EXPENSE':
            return state.filter( ( exp ) => ( exp.id !== action.expenses.id ) );
        case 'EDIT_EXPENSE':
            return state.map( ( exp ) =>
            {
                if ( exp.id === action.id )
                {
                    return {
                        ...exp,
                        ...action.updates
                    };
                }
                else
                {
                    return exp;
                }
            } );
        default:
            return state;
    }
};

export default expensesReducer;