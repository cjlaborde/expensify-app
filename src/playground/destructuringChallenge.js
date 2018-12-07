const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
    //    name: 'Penguin' 
    }
}

const {name: publisherName = 'self published' } = book.publisher

console.log(publisherName) // Peguin, self published