const address = ['1299 & Juniper Street', 'Philadelphia', 'Pennsylvania', '19147']


// const [street, city, state, zip] = address

// no need to declare all only what you use
// const [, city, state=] = address

// const [, city, state='New York'] = address



// console.log(`You are in ${city} ${state}.`)

// Example # 2============

const address2= []

const [, city, state='New York'] = address2

// console.log(`You are in ${state}.`)

// Challenges

const item = ['Coffee (hot)', '$2.00', '2.50', '$2.75']

const [coffee,, medium] = item

console.log(`A Medium ${coffee} cost ${medium}`)

