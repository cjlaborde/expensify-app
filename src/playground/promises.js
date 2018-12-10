// Rarely do we create promises since it's usually created by library like firebase for you

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('This is my other resolved data') gets ignore since it can only resolve or reject onces
        // resolve('This is my resolved data')
        // can't resolve another item so call object when you need more
        
        resolve({
            name: 'Andrew',
            age: 26
        })
        // reject('Something went wrong!')
    }, 5000)
})
console.log('before')
// then register a callback that will fire when promise resolves


// ===============================================================================
// Promise Chaining

// ## We know here what to do when promise resolve or rejects

/** Been able to chain promises and chain like this, will allow us to return the need for nested callbacks  */

promise.then((data) => {
    console.log('1', data)
    // need to include return to be the success of that promise.
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('this is my other promise')
        }, 5000)
    })
}).then((str) => {
    console.log('does this run?',str) // this runs when return new Promise actually resolves.
}).catch((error) => {
    console.log('error', error)
})

console.log('after')


// promise.then((data) => {
//     console.log('1', data)
//     return 'some data' // === str || with data not work since it already returned the data
// }).then((str) => {
//     console.log('does this run?',str)
// }).catch((error) => {
//     console.log('error', error)
// })

// console.log('after')