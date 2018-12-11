import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { startSetExpenses } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'
import 'react-dates/initialize'
import './firebase/firebase'
import './playground/promises'

const store = configureStore()

// store.dispatch(addExpense({ description: 'Water bill', amount: 4500, createdAt: 1000}))
// store.dispatch(addExpense( { description: 'Gas bill', amount: 1000, createdAt: 30000 }))
// store.dispatch(addExpense( { description: 'Rent', amount: 109500, createdAt: 20000 }))

// for testing
// store.dispatch(setTextFilter('water'))

// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'))
// }, 3000)

// Get entire state of all the expenses and filters
// const state = store.getState()
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters) // get this data from the return value of getVisibleExpenses above
// console.log(visibleExpenses)


// Redux Step# 1 | define store that we want to provide to all of our components
const jsx = (
    <Provider store={store}>
        <AppRouter /> 
    </Provider>
)

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'))

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'))
})

