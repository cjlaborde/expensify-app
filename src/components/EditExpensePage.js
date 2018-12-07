import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { editExpense, removeExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.editExpense(this.props.expense.id, expense)
        this.props.history.push('/')
    }
    onRemove = () => {
        this.props.removeExpense({ id: this.props.expense.id })
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <ExpenseForm
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}
                />
                <button onClick={this.onRemove}>Remove</button>
            </div>
        )
    }
}
// const EditExpensePage = (props) => {
//     //console.log(props) //use to find this path {props.match.params.id} | {props.expense}
//     // Editing the expense with id of {props.match.params.id}
//     return  (
//         <div>
//             <ExpenseForm
//                 expense={props.expense}
//                 onSubmit={(expense) => {
//                     // Dispatch the action to edit the expense
//                     props.dispatch(editExpense(props.expense.id, expense))
//                     // Redirect to the dashboard
//                     props.history.push('/')
//                     // console.log('updated', expense)
//                 }}
//             />
//             <button 

//             onClick={() => {
//                 // console.log(props.expense.id)
//                 props.dispatch(removeExpense({ id: props.expense.id }))
//                 props.history.push('/')
//             }}
//             >Remove</button>
//         </div>
//     )
// }

// we want to give the component the current expense object 
const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
})

const mapDispatchToProps = (dispatch, props) => ({
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    removeExpense: (data) => dispatch(removeExpense(data))// what we going to do on submit (pass expense) => do this call (dispatch(addExpense(expense))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)
/**
 * We want to get the entire expense object
 * step#1 import connect
 * step#2 search the expense array for the expense with an id that matches {props.match.params.id}
 */