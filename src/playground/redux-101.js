import { createStore } from 'redux'

// const add = ({a, b}, c) => {
//     return a + b + c
// }

// console.log(add({ a: 1, b: 12 }, 100))




// Action Generators - functions that return action objects
// payload can be any name you like you can use load as well for example
// you need default in place or you get error  {}) 
// const incrementCount = (payload = {}) => ({ 
//     type: 'INCREMENT',
//     incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
// })


 // If  ({ incrementBy = 1 } doesn't exist we start it  = {}) => as empty object

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy: incrementBy 
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy: decrementBy
})


// setCount

const setCount = ({ count } = {}) => ({
    type: 'SET',
    count
})

// resetCount

const resetCount = () => ({
    type: 'RESET'
})



// This Function is Called a Reducer is One of the core concept of Redux
// https://redux.js.org/basics/reducers

// Reducers-- Function we pass in to create store
// 1. recducers are pure functions
// 2. Never change state or actions/ just Return instead
// it should be reading off state and action
// in the end returns the new state
// that is how it manipulate the redux store state

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
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
}

const store = createStore(countReducer)

const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy : 5
// })

store.dispatch(incrementCount({ incrementBy: 5 }))

store.dispatch(incrementCount())

store.dispatch(resetCount())

// store.dispatch({
//     type: 'RESET'
// })

// store.dispatch({
//     type: 'DECREMENT'
// })
store.dispatch(decrementCount())
store.dispatch(decrementCount({ decrementBy: 10 }))

// store.dispatch({
//     type: 'DECREMENT', 
//     decrementBy: 10
// })

store.dispatch(setCount({ count: -100 }))

/*
Old Way 
Typos not easy to catch
store.dispatch({
    type: 'INCREMENTTTTT',
    incrementBy : 5
})
//## Shows no Error

While
store.dispatch(incrementCountt())

Does Shows Error///////////////////////////////////////////////////


store.dispatch({
    type: 'INCREMENT',
    incrementBy : 5
})

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

store.dispatch ({
    type: 'SET',
    count: 101
})

*/