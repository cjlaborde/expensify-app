import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'
import { setExpenses } from '../../actions/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual([])
})

// id: expenses[1].id you plan to delete and check if that id was removed and not there with expect(state).toEqual([ expenses[0], expenses[2]])

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([ expenses[0], expenses[2]])
})

// use random id: '-1' that you know don't exist
//     expect(state).toEqual(expenses) means expect an array that has not been changed at all.
test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('should add an expense', () => {
    const expense = {
        id: "ramdonId",
        description: 'Pizza',
        note: '',
        amount: 1888,
        createdAt: 2000
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }

    const state = expensesReducer(expenses, action)
    // expect(state).toEqual([ expenses[0], expenses[1], expenses[2], expense ])
    expect(state).toEqual([ ...expenses, expense ])
})

test('should edit expense', () => {
    const amount = 12467
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            amount
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state[1].amount).toBe(amount)
})

test('should not edit expense if id not found', () => {
    const amount = 12467
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            amount
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[1]])
})