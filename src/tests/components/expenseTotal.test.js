import React from 'react'
import { shallow } from 'enzyme'
import expenses from '../fixtures/expenses'
import ExpenseSummary from '../../components/ExpensesSummary'


test('should render ExpenseList with expenses', () => {
    // requires props so you need to add it
    const wrapper = shallow(<ExpenseSummary expenses={expenses} />)
    expect(wrapper).toMatchSnapshot()
})


test('should return 0 if no expenses', () => 
{
    const wrapper = shallow(<ExpenseSummary expenses={expenses} />)
    expect(wrapper)
    
})

test('should correctly add up a single expense', () => {

})

test('should correctly add up multiple expense', () => {

})

/*

let addExpense, history, wrapper

beforeEach(() => {
// we use same since we still rendering
    addExpense = jest.fn()
    history = { push: jest.fn() }
    // use spies defined above
    wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />)
})

test('should render AddExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot()
})
*/