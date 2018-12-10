import React from 'react'
import { shallow } from 'enzyme'
import {AddExpensePage} from '../../components/AddExpensePage'
import expenses from '../fixtures/expenses'

// const renderExpense = () => {

// }

// https://jest-bot.github.io/jest/docs/api.html#content
let startAddExpense, history, wrapper

beforeEach(() => {
// we use same since we still rendering
    startAddExpense = jest.fn()
    history = { push: jest.fn() }
    // use spies defined above
    wrapper = shallow(<AddExpensePage startAddExpense={startAddExpense} history={history} />)
})

test('should render AddExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should handle onSubmit', () => {
    // now call the functions to test

    // call
    // <ExpenseForm 
    // onSubmit={this.onSubmit}
    // with

    // then use data from fixture test data
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]) 

//Now We  call
    // onSubmit = (expense) => {
    //     this.props.onSubmit(expense) 
    //     this.props.history.push('/')
    // }

    expect(startAddExpense).toHaveBeenCalledWith(expenses[1])
    expect(history.push).toHaveBeenCalledWith('/')

})