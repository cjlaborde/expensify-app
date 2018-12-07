import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

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
    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note: 'This was last months rent '
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            // https://jestjs.io/docs/en/expect#expectanyconstructor
            id:expect.any(String)
        }
    })
})

test('Should setup add expense action object with default values', () => {
    const action = addExpense(addExpense)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id:expect.any(String),
            description: '',
            note: '',
            amount: 0, 
            createdAt: 0 
        }
    })
})

/*
When we use === when compare 2 objects we will never find that they equal
{} === {}
false
That is why not to use toBe for Objects
Use toEqual instead

*/