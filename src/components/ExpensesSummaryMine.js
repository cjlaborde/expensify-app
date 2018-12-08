import React from 'react'
import { connect } from 'react-redux'
import selectExpenses from '../selectors/expenses'
import numeral from 'numeral'
import ExpenseTotal from '../selectors/expenses-total'

// import getExpenseTotal from '../selectors/expenses-total';

const ExpenseSummary = (props) => {
    let expense
    let expensesCount = props.expenses.length
    let expenseTotal = ExpenseTotal(props.expenses)
    expensesCount > 1 ? expense = 'expenses' : expense = 'expense'
    
    // const expenseTotal = props.expenses.reduce((acc, expense) => expense.amount > 0 ? acc + expense.amount : acc, 0)
    return `Viewing ${expensesCount} ${expense} totaling in ${numeral(expenseTotal / 100).format('$0,0.00')} `
}

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseSummary)