import moment from 'moment'

// Filters Reducer
//https://momentjs.com/docs/#/manipulating/start-of/
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
}

// Reducer the one that controls the states
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
        // create new object from existing one/ you don't want to edit one instead make new one.
           return {
               ...state,
               text: action.text
           }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORT_BY_DATE':
           return {
               ...state,
               sortBy: 'date'
           }
        case 'SET_START_DATE':
        return {
            ...state,
            startDate: action.startDate
        }
        case 'SET_END_DATE':
        return {
            ...state,
            endDate: action.endDate
        }
        default:
            return state
    }
}

export default filtersReducer
