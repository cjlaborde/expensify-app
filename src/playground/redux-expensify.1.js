import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'

// Store creation
    // store and combines the reducers into 1.


store.subscribe(() => {
    // Get entire state of all the expenses and filters
    const state = store.getState()
    // get this data from the return value of getVisibleExpenses above
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)
    // console.log(store.getState())
})
const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 1000, createdAt: -21000 }))
// console.log(expenseOne)
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000 }))

// store.dispatch(removeExpense({ id: expenseOne.expense.id }))
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }))

// store.dispatch(setTextFilter('ffe'))
// store.dispatch(setTextFilter())

store.dispatch(sortByAmount()) // amount
// store.dispatch(sortByDate()) // date

// store.dispatch(setStartDate(125)) // only rent show up
// store.dispatch(setStartDate(-2000)) // all items show up
// store.dispatch(setStartDate(2000)) // no item since none was created after this point
// store.dispatch(setEndDate(999)) // no item since none was created after this point
// // remove value with empthy 
// store.dispatch(setStartDate())

// store.dispatch(setStartDate(0)) // no item since none was created after this point
// // if both active will show only 1 item
// store.dispatch(setEndDate(999))

const demoState = {
    //Create Reducer #1
    expenses: [{
        id: 'dfdgfgfdshgfh',
        description: 'January Rent', 
        note: 'This was the final payment for that address',
        amount: 54500, // in penies
        createdAt: 0
    }],
        //Create Reducer #2
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
}