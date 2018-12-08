import React from 'react'
import ExpenseList from './ExpenseList'
import ExpenseSummary from './ExpensesSummary'
import ExpenseListFilters from './ExpenseListFilters'

const ExpenseDashboardPage = () => (
    <div>
        <ExpenseListFilters />
        <ExpenseSummary />
        <ExpenseList />
    </div>
)

export default ExpenseDashboardPage