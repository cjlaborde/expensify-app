import React from 'react'
import { connect } from 'react-redux'
import { DateRangePicker } from 'react-dates'
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters'

export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null

    }
    // this function going to be called by the react date library
    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)
    }
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }))
    }
    onTextChange = (e) => {
            this.props.setTextFilter(e.target.value)
    }
    onSortChange = (e) => {
        if (e.target.value === "date") {
            this.props.sortByDate()
        } 
        else if (e.target.value === "amount") {
            this.props.sortByAmount()
        }
    }
    // // this function going to be called by the react date library
    // onDatesChange = ({ startDate, endDate }) => {
    //     this.props.dispatch(setStartDate(startDate))
    //     this.props.dispatch(setEndDate(endDate))
    // }
    // onFocusChange = (calendarFocused) => {
    //     this.setState(() => ({ calendarFocused }))
    // }
    // onTextChange = (e) => {
    //         this.props.dispatch(setTextFilter(e.target.value))
    // }
    // onSortChange = (e) => {
    //     if (e.target.value === "date") {
    //         this.props.dispatch(sortByDate())
    //     } 
    //     else if (e.target.value === "amount") {
    //         this.props.dispatch(sortByAmount())
    //     }
    // }
  render() {
    return (
        <div>
            <input 
            type="text" 
            // control input-- means input that is controlled by javascript
            value={this.props.filters.text}
            onChange={this.onTextChange}
            />
            <select 
                value={this.props.filters.option} 
                onChange={onSortChange}
            >
            <option value="date">Date</option>
            <option value="amount">Amount</option>
            </select>
            <DateRangePicker // https://github.com/airbnb/react-dates PROPS to be added to DateRangePicker
                startDate={this.props.filters.startDate}
                startDateId="your_unique_start_date_id"
                endDate={this.props.filters.endDate}
                endDateId="your_unique_end_date_id" 
                onDatesChange={this.onDatesChange}
                focusedInput={this.state.calendarFocused}
                onFocusChange={this.onFocusChange}
                showClearDates={true}
                numberOfMonths={1}
                isOutsideRange={() => false}
            />
        </div>
      )
    }
}

const mapStateToProps = (state) => ({
        filters: state.filters
})

/**
 *Set all dispatch on mapDispatchToProps below

       this.props.dispatch(setStartDate(startDate))
        this.props.dispatch(setEndDate(endDate))
        this.props.dispatch(setTextFilter(e.target.value))
        this.props.dispatch(sortByDate())
        this.props.dispatch(sortByAmount())
 */

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
})

// ()(Takes component mapStateToProps) (Takes the component) 
export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters)

/*
// change it to class to track this.state value

Changed to class 
const ExpenseListFilters = (props) => (
    <div>
        <input 
        type="text" 
        // control input-- means input that is controlled by javascript
        value={props.filters.text}
        onChange={(e)=> {
                props.dispatch(setTextFilter(e.target.value))
                // console.log(e.target.value)
            }} 
        />
        <select 
            value={props.filters.option} 
            onChange={(e) => {
            if (e.target.value === "date") {
                props.dispatch(sortByDate())
            } 
            else if (e.target.value === "amount") {
                props.dispatch(sortByAmount())
            }
            }}
        >
        <option value="date">Date</option>
        <option value="amount">Amount</option>
        </select>

    </div>
)

*/