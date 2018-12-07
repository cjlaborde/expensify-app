import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'
// combineReducer allows us to create multiple functions that defines how our redux application changes

// ########App Architecture of Actions to Build##########

// ADD_EXPENSE
// we going to destructure the first argument, if it not exist we going to destructure an empty array as well.
const addExpense = (
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
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

// SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})

// SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})

// SET_START_DATE
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})

// SET_END_DATE
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})



// ====================================/


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
/*

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) =>  optionToRemove !== option)
                // Delete all excerpt the one we clicked return optionToRemove === option So we flip it with ! so it deletes the one I select only to be deleted and stay in the array.
        }))
*/
// const expensesReducer = (state = expensesReducerDefaultState, action) => {
    //     switch (action.type) {
        //         case 'ADD_EXPENSE':
        //         // state.push(action.expense) || problem push changes original array| we want to avoid that, we don't want to change state or action we just want to read off of them 
        //         return state.concat(action.expense) // concat doesn't change the array at all
        //         default: 
        //             return state
        //     }
        // }
                
        // Default State 
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

// Reducer the one that controls the states
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
        // create new object from existing one/ you don't want to edit one instead make new one.
           return {
               ...state,
               text: action.text
           }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORT_BY_DATE':
           return {
               ...state,
               sortBy: 'date'
           }
        case 'SET_START_DATE':
        return {
            ...state,
            startDate: action.startDate
        }
        case 'SET_END_DATE':
        return {
            ...state,
            endDate: action.endDate
        }
        default:
            return state
    }
}

/*
return state.map((expense) => {
if (expense.id === action.id) {
    // if matched we want to return a new object
    return {
        // object spread operator
        // grab all properties from existing one 
        ...expense,
    }
    return state.filter(({text}) => text === action.text)
 */



// Get visible expenses
// calculate the visible expenses would look like
// const getVisibleExpenses = (expenses, filters) => {
//     return expenses
// }

// startdate and enddate use timestamp
    // positive number go forward in time
    // negative numbers go backwards in time
    // January 1st 1970 (unix apoch) Start time for all of our timestamps
    // positive numbers will come after and negative numbers before

// You have to detructure filters  as done below
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    // this will go through the individual expenses to allow to know which should be included in visible expenses
    // we going to use 3 data to determine this text, startDate, endDate
    return expenses.filter((expense) => {
        //store when ever if they were matches.
        // only if startDateMatch a number do we want to filter expenses
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        // if all are true- the filter function will return true- and item will be kept in the array
        // if all are false- will cause item to be remove from the array
        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b) => {
        if (sortBy === 'date') {  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
            return a.createdAt < b.createdAt ? 1 : -1
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1
        }
    })
}

// Store creation
    // store and combines the reducers into 1.
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
)

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

/*

Object Operator
// we going to use it to editExpense

const user = {
    name: 'Jen',
    age: 24
}

console.log({
    age: 27,
    ...user,
    location: 'Philadelphia',
})

*/ 