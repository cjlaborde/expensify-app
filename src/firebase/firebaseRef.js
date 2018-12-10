// grabs all in firebase to have access to all functions
// import * as firebase from 'firebase'
import * as firebase from 'firebase/app'
import 'firebase/database'
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDYpR4Bn0zmeMjZPlXwikz10aEM8beqGFs",
    authDomain: "expensify-3189c.firebaseapp.com",
    databaseURL: "https://expensify-3189c.firebaseio.com",
    projectId: "expensify-3189c",
    storageBucket: "expensify-3189c.appspot.com",
    messagingSenderId: "754432030059"
}

firebase.initializeApp(config);

const database = firebase.database()

/**Subscribers */

// #1 child_removed fire when one of our expenses get deleted
database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val())
})

// #2 child_changed fires when one of your expenses changes
database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val())
})

// #3 child_added fires when one of your expenses changes
// will fire one time for data already at it's location and for new children
database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val())
})

database.ref('expenses').push({
    description: 'Pizza',
    note: 'extra cheese',
    amount: 2000,
    createdAt: 12122019
})



/**What We NEED to intagrate Firebase with our React Redux that needs Array that firebase don't support */
/*
database.ref('expenses')
    .once('value')
    .then((snapshot) => {
        const expenses = []
        // we basically creating a new array from the firebase snapshot since firebase don't support array
        snapshot.forEach((childSnapshot) => {
            expenses.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            })
        })

        // console.log(expenses)
    })

// with .on() we will be able to get value initially and when value changes
// remember .on don't support promises .then
database.ref('expenses')
    .on('value', (snapshot) => {
        const expenses = []
        // we basically creating a new array from the firebase snapshot since firebase don't support array
        snapshot.forEach((childSnapshot) => {
            expenses.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            })
        })

        console.log(expenses)
    })

*/
// database.ref('expenses').push({
//     description: 'Pizza',
//     note: 'extra cheese',
//     amount: 2000,
//     createdAt: 12122019
// })


// ### Update note
// database.ref('notes/-LTK-swsWrJjpQq-zesn').update({
//    body: 'Buy food'
// })

// ### Remove note
// database.ref('notes/-LTK-swsWrJjpQq-zesn').remove()

/*
database.ref('notes').push({
    title: 'Course Topics',
    body: 'React Native, Angular, Python'
})
*/

/*

const firebaseNotes = {
    notes: {
        tretr: { //id
            title: 'First note!',
            body: 'This is my note'
        },
        rtret: {
            title: 'First note!',
            body: 'This is my note'
        }

    }
}


const notes = [{
    id: '12',
    title: 'First note!',
    body: 'This is my note'
}, {
    id: '761ase',
    title: 'Another note!',
    body: 'This is my note'
}]

database.ref('notes').set(notes)
database.ref('notes/12')

*/

/**Read Data =============================================================================*/

// have server notify us of changes using .on()

// with .on() we will be able to get value initially and when value changes
    // we don't use promises since they can only be rejected or resolve

// database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val())
// })

// Setup data sub -> 

// database.ref().on('value', (snapshot) => {
//     .on('value')
// })

/*

database.ref().on('value', (snapshot) => {
   const val = snapshot.val()
    console.log(`${val.name} is a ${val.job.title} works at ${val.job.company}`)
})

*/

/**
 This will be able to unsubscribe  onValueChange on subscription without afecting the others

const onValueChange = database.ref().on('value', (snapshot) => {
    console.log(snapshot.val())
}, (e) => {
    console.log('Error with data fetching', e)
})

// database.ref().on('value', onValueChange)

setTimeout(() => {
    database.ref('age').set(29)
}, 3500)

// cancels subscriptions with .off and stops
// here we can unsubscribe later onValueChange call
setTimeout(() => {
    database.ref().off(onValueChange)
}, 7000)
// we don't get message yet age still changes
setTimeout(() => {
    database.ref('age').set(30)
}, 10500)
*/
 
/*
// call data once| once return a promise and we use that data when it comes back
database.ref('location/city')
    .once('value')
    // the data is called right here this is what is called a snapshot| here we access to our data
    .then((snapshot) => {
        const val = snapshot.val()
        console.log(val)
    })
    .catch((e) => {
        console.log('Error fetching data', e)
    })
*/

/**==================================================================================== */

/*
database.ref().set({
    name: 'Andrew Mead',
    age: 26,
    stressLevel: 6,
    job: {
        title: 'Software developer',
        company: 'Google'
    },
    location: {
        city: 'Philadelphia',
        country: 'United States'
    }
}).then(() => {
    console.log('Data is saved!')
}).catch((error) => {
    console.log('error failed', error)
})

*/

// Change the stressLevel to a 9
// job amazon
// location Seatle

/*

database.ref().update({
    stressLevel: 9,
    'job/company': 'Amazon',
    'location/city': 'Seattle'
})

*/

// Only update at root level so country would be deleted.
/*
database.ref().update({
    job: 'Manager',
    location: {
        city: 'Boston'
    }
})

// Solution to above problem

database.ref().update({
    job: 'Manager',
    'location/city': 'Boston'
})
 */

// ## we use update to only change 2 fields we provide ===========================
/*
database.ref().update({
    name: 'Mike',
    age: 29,
    // can also add new data like job
    job: 'Software developer',
    //null to delete
    isSingle: null
})
*/
// ## Method 1 Delete data with remove()========================================
/*
database.ref()
    .remove()
    .then(() => {
        console.log('Data was removed')
    }).catch((e) => {
        console.log('Did not remove data', e)
    })
*/     
        
        
// ## Method 2 Delete data using set
// database.ref('isSingle').set(null)


// ============================================================================

/*

database.ref().set('This is my data')

database.ref('age').set(27)
// to access city above
database.ref('location/city').set('New York')

database.ref('attributes').set({
    height: 73,
    weight: 150
}).then(() => {
    console.log('height & weight is saved')
}).catch((error) =>  {
    console.log('error height & weight', error)
})

*/

