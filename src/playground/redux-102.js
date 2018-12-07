import { createStore } from 'redux'
/*
## Similar To::::
this.steState((prevState) => {
    return prevState
})
*/

// Action Generators - functions that return action objects


// action.type type = is either INCREMENT or DECREMENT
const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
        const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1
            return {
                count: state.count + incrementBy
            }
        case 'DECREMENT':
        const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1
            return {
                count: state.count - decrementBy
            }
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: state.count = 0
            }
        default: 
            return state; // do nothing

    }
})


// WATCH FOR CHANGES TO STORE WITH subscribe()
// console log each time the state store changes
/*
store.subscribe(() => {
    console.log(store.getState())

})

*/

// ### STOP SUBSCRIBING 

const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})


//### Using If
/* 
const store = createStore((state = { count: 0 }, action) => {
    if (action.type === 'INCREMENT') {
        return {
            count: state.count + 1
        }
    } else {
        return state
    }
    // console.log('running')
})
*/


// Actions - that an object gets sent to the store

// walk, stop_walk, sit, work, stop_working
//## for our app--> increment, decrement, reset, 

// I'd like to increment the count

store.dispatch({
    type: 'INCREMENT',
    incrementBy : 5
})

// stops subscription
// unsubscribe()


store.dispatch({
    type: 'INCREMENT'
})

store.dispatch({
    type: 'RESET'
})

store.dispatch({
    type: 'DECREMENT'
})

store.dispatch({
    type: 'DECREMENT', 
    decrementBy: 10
})

// I'd like to reset the count to zero

// console.log(store.getState())

// has requires types/ we just use them directly
// we force the value
store.dispatch ({
    type: 'SET',
    count: 101
})