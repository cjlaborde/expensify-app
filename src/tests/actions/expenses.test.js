import { startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import database from '../../firebase/firebase'

// here you setup the thunk middleware
const createMockStore = configureMockStore([thunk])

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' })
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('Should setup edit expense action object', () => {
    const action = editExpense('123abc', {note: 'New note value' })
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'New note value'
        }
    })
})

test('Should setup add expense action object with provided values', () => {

    const action = addExpense(expenses[2])
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
})

// figure out how to dispatch all of our action dispatch to our MockStore

test('should add expense to database and store', (done) => {
    const store = createMockStore({})
    // fake data
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: 'This one is better',
        createdAt: 1000
    }
// this code run after parent has return so it doesn't show error as it should since it's async
// you can attach promise from expenses.js using promise chaining 
// https://github.com/dmitry-zaets/redux-mock-store
    store.dispatch(startAddExpense(expenseData)).then(() => {
        // make test about the action
       const actions = store.getActions()
       expect(actions[0]).toEqual({
           type: 'ADD_EXPENSE',
           expense: {
               id: expect.any(String),
               ...expenseData
           }
       })
       // goal here to how to get individual expense
       // id generated by firebase we can use it to generate that item.

       // then we start this process and make test as well
      return database.ref(`expenses/${actions[0].expense.id}`).once('value')
       }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData) 
        done() // going to force jest to wait till this moment in time. || this fixes above issue.
    })
})

test('should add expense with defaults to database and store', (done) => {
    const store = createMockStore({})
    // fake data
    const expenseDefaults = {
        description: '',
        amount: 0, 
        note: '',
        createdAt: 0
    }
    store.dispatch(startAddExpense({})).then(() => {
        // make test about the action
       const actions = store.getActions()
       expect(actions[0]).toEqual({
           type: 'ADD_EXPENSE',
           expense: {
               id: expect.any(String),
               ...expenseDefaults
           }
       })

      return database.ref(`expenses/${actions[0].expense.id}`).once('value')
       }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefaults) 
        done() // going to force jest to wait till this moment in time. || this fixes above issue.
    })
})

// test('Should setup add expense action object with default values', () => {
//     const action = addExpense(addExpense)
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             id:expect.any(String),
//             description: '',
//             note: '',
//             amount: 0, 
//             createdAt: 0 
//         }
//     })
// })

/*
When we use === when compare 2 objects we will never find that they equal
{} === {}
false
That is why not to use toBe for Objects
Use toEqual instead

*/