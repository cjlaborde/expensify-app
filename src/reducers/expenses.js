// 1) Expenses Reducer

const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
        return [
            ...state,
            action.expense
        ]
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id)
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    // if matched we want to return a new object
                    return {
                        // object spread operator
                        // grab all properties from existing one 
                        ...expense,
                        // overwrite the ones that were pass in. In this case store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }))
                        // create new array
                        ...action.updates
                    }

                } else {
                    return expense // means we do nothing since there was no match
                }
            })
        default: 
        return state
    }
}

export default expensesReducer