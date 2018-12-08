export default (expenses) => {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
    return expenses
        .map((expense) => expense.amount)
        .reduce((sum, value) => sum + value, 0)

} 

/*
## Alternative method
export default (expenses) => {
        // https://codepen.io/etiennetalbot/pen/EozzeZ?editors=0011/
        // https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d
       return expenses
        .reduce((acc, expense) => expense.amount > 0 ? acc + expense.amount : acc, 0)


} 
*/