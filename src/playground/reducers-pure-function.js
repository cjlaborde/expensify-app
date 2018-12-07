// Reducers
// 1. recducers are pure functions


//  Not pure function since it depend son global variable and not just input
let a = 10
const add = (b) => {
    return a + b
}

// pure function 
const add = (a, b) => {
    return a + b
}

// not pure since it's interacting outside it's scope
let result
const add = (a, b) => {
    result = a + b
}



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
