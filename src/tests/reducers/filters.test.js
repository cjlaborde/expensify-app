import filtersReducer from '../../reducers/filters'
import moment from 'moment'

// ==============================================================================
test('should setup default filter values', () => {
    // (current stare, {} = our action object) using Redux chrome tool we saw that first one it dispatch is { type: '@@INIT' })
    const state = filtersReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

// ===========================================================================
test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT'})
    expect(state.sortBy).toBe('amount')
})

// The default is already date so to make things actually change and work we need to add a state instead of using undefined
test('should set sortBy to date', () => {
    // provide the neccesary data for testing you only need sortBy: 'amount' the other can be empty. 'amount so we can taste the change from amount to date
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    }
    const action = { type: 'SORT_BY_DATE' }
    const state = filtersReducer(currentState, action)
    // since we not comparing array or object we use toBe
    expect(state.sortBy).toBe('date')
})

/*
    Testing also help us be able to refactor code to increase performance without worrying about breaking functionality
 */

 test('should set text filter', () => {
     const text = 'This is my filter'
     const action = { 
         type: 'SET_TEXT_FILTER',
         text }
     const state = filtersReducer(undefined, action)
     expect(state.text).toBe(text)    
 })


test('should set startDate filter', () => {
    const startDate = moment()
    const action = { 
        type: 'SET_START_DATE',
        startDate
     }
    const state = filtersReducer(undefined, action)
    expect(state.startDate).toEqual(startDate)
})
test('should set endDate filter', () => {
    const endDate = moment()
    const action = { 
        type: 'SET_END_DATE',
        endDate
     }
    const state = filtersReducer(undefined, action)
    expect(state.endDate).toEqual(endDate)
})

// test('should set endDate filter', () => {
//     const action = { type: 'SET_END_DATE' }
//     const state = filtersReducer(undefined, action)
//     expect(state.endDate).toEqual(action.endDate)
// })
// test('should set startDate filter', () => {
//     const action = { type: 'SET_START_DATE' }
//     const state = filtersReducer(undefined, action)
//     expect(state.startDate).toEqual(action.startDate)
// })

// test('should set endDate filter', () => {
//     const action = { type: 'SET_END_DATE' }
//     const state = filtersReducer(undefined, action)
//     expect(state.endDate).toEqual(action.endDate)
// })

// test('should set endDate filter', () => {
//     const state = filtersReducer(undefined, { type: 'SET_END_DATE'})
//     expect(state.endtDate).toBe(state.endDate)
// })