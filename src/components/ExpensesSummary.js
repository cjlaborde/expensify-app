import React from 'react'
import { connect } from 'react-redux'
import selectExpenses from '../selectors/expenses'
import numeral from 'numeral'
import selectExpenseTotal from '../selectors/expenses-total'

// import getExpenseTotal from '../selectors/expenses-total';

const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
    const expenseWord = expenseCount > 1 ? 'expenses' : 'expense'
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00')
    return (
        <div>
            <h1>Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}</h1>
        
        </div>
    )
      
}

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters)
    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpenseTotal(visibleExpenses)
    }
}

export default connect(mapStateToProps)(ExpensesSummary)