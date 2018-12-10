 import uuid from 'uuid'
 import database from '../firebase/firebase'

// without firebase

// component calls action generator
// action generator returns object
// component dispatches object
// redux store changes

// with firebase

// components calls action generator
// action generator returns function
// component dispatches function (?) ==== redux don't support functions so we going to add a module middleware to add support for functions
    // redux will run the function == function where we put our firebase code
    // we will be able to use firebase push to put something on the database 
    // then we will have ability to dispatch another action
    // a standard one that returns an action and that will manipulate the waredux store
// function runs (has the ability to dispatch other actions and do whatever it wants)

// ADD_EXPENSE
// It's set up to take object with these attributes from AddExpensePage->ExpenseForm
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
})
// will dispatch addExpense inside this function to change the store | needs redux thunk to work
export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '',
            note = '',
            amount = 0, 
            createdAt = 0 
        } = expenseData
        const expense = { description, note, amount, createdAt }
        //* we care if database was successful updated so we test this
        // we promise chain it here from expenses.test.js
           return database.ref('expenses').push(expense).then((ref) => {
            // we need to dispash otherwise redux store not going to change

            // * we care that the correct action was dispatch
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }))
        })
    }
}
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