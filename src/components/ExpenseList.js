import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'
//use connect function in all individual components

// #1) regular unconnected component
//  unconnected version we use on our test cases/ we will use snapshop testing passing some data in to see if it work as expected.
export const ExpenseList = (props) => (
    <div>
    {
        props.expenses.length === 0 ? (
            <p>No expenses</p>
        ) : (
            props.expenses.map((expense) => {
                return <ExpenseListItem key={expense.id} {...expense} />
            })
        )
    }
        </div>
        // {props.expenses.map((expense) => {
        //     return <ExpenseListItem
        //     key={expense.createdAt}
        //     description={expense.description}
        //     amount={expense.amount}
        //     createdAt={expense.createdAt}
        //     />
        // })    
        // }
)
// Redux Step# 2 Create new highee components
// #2) function
const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}
// conects and pull all together
// connect() inside goes the address of what we want to connect. we create function with information we want to access
// Redux Step# 3 define things we want to get from store. Define component we want to create. A connected version off

// default connected version
export default connect(mapStateToProps)(ExpenseList)