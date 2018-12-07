import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { addExpense } from '../actions/expenses'

// to avoid inline functions  we switch function to a class base component
export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.addExpense(expense) 
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
            <h1>add Expense</h1>
            <ExpenseForm 
                onSubmit={this.onSubmit}
                // no need to do this since we use class
                // onSubmit={(expense) => {
                //     props.onSubmit(expense) 
                //     props.history.push('/')
                // }}
                // use onSubmit={this.onSubmit} instead
            />
            />
        </div>
        )
    }
}

// const AddExpensePage = (props) => (
//     <div>
//         <h1>add Expense</h1>
//         <ExpenseForm 
//             // we get the expense object back  with all it's properties from ExpenseForm.js
//             onSubmit={(expense) => {
//                 // console.log(expense)
//                 // props.dispatch(addExpense(expense))
//                     // Replaced by
//                 props.onSubmit(expense) 
//                 // in chrome React tools look for addExpense then history---> tools push is what you use to change pages
//                 // ('/') Send you to home page while ('/help') sends you to help page
//                 props.history.push('/')
//             }}
//         />
//     </div>
// ) 
// makes it easier to test
// https://gist.github.com/heygrady/c6c17fc7cbdd978f93a746056f618552
const mapDispatchToProps = (dispatch) => ({        // what we going to do on submit (pass expense) => do this call (dispatch(addExpense(expense))
    addExpense: (expense) => dispatch(addExpense(expense))
})

// mapStatesToProps = undefined since we don't use it.
export default connect(undefined, mapDispatchToProps)(AddExpensePage) 