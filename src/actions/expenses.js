 import uuid from 'uuid'

// ADD_EXPENSE
// It's set up to take object with these attributes from AddExpensePage->ExpenseForm
export const addExpense = (
    {
        // Default Values
        description = '',
        note = '',
        amount = 0, 
        createdAt = 0 
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        //shorthand Es6 Method
        description,
        note,
        amount,
        createdAt
    }
})

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})