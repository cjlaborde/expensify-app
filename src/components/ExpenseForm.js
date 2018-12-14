import React from 'react'
import moment from 'moment'
// calendar picker tool that requires moment
import { SingleDatePicker } from 'react-dates' //http://airbnb.io/react-dates/?selectedKind=SingleDatePicker%20%28SDP%29&selectedStory=default&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel

// we use class since we going to use components states

// const date = new Date() normal method without moment but it's aweful use moment instead
// const now = moment()
// console.log(now) check all methods available in the _proto_

// https://momentjs.com/docs/#/displaying/
// console.log(now.format('MMM Do, YYYY'))

// tract information with local state and only when user submit form is when we do something with the information
// then send submit data to redux to either edit existing expenses or create new one.
class ExpenseForm extends React.Component {
    constructor(props) {
       super(props)
// moved it here so we can assign values when it initially has
       this.state =  {
        description: props.expense ? props.expense.description : '',
        note: props.expense ? props.expense.note : '',
        // we convert it to string so that it keeps the 0000.00 regular expressions checking otherwise would not be able to
        amount: props.expense ? (props.expense.amount / 100).toString() : '',
        //  moment(timeStamp Location)
        createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
        calendarFocused: false,
        error: ''
        }
    }
    // state = {
    //     description: '',
    //     note: '',
    //     amount: '',
    //     createdAt: moment(),
    //     calendarFocused: false,
    //     error: ''
    // }
    onDescriptionChange = (e) => {
        const description = e.target.value
        this.setState(() => ({ description }))
    }
    onNoteChange = (e) => {
        const note = e.target.value
        this.setState(() => ({ note }))
    }
    onAmountChange = (e) => {
        const amount = e.target.value
        // match takes regular expresion in https://regex101.com/ for number with 2 decimals in end 0000.00
        // !mount || ----> will allow you to delete the numbers when you press delete and backspace otherwise the regular expression will not register it
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }))
        }
    }
    onDateChange = (createdAt) => {
        // don't allow date to be deleted. Only take action when there is actual date.
        if (createdAt) {
            this.setState(() => ({ createdAt }))
        }
    }
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused}))
    }
    onSubmit = (e) => {
        e.preventDefault() // cancels page refresh

        if (!this.state.description || !this.state.amount) {
            // Set error state equal to 'Please provide description and amount.'
            this.setState(() => ({ error: 'Please provide description and amount.'}))
        } else {
            // Clear the error
            // console.log('submitted!')
            this.setState(() => ({ error: ''}))
            this.props.onSubmit({
                description: this.state.description,
                // parse convert the string into a number. We made it into a string to control it to be 0000.00 only
                
                amount: parseFloat(this.state.amount, 10) * 100,
                //https://momentjs.com/docs/#/displaying/unix-timestamp-milliseconds/ valueOf() now you get regular number that represents that value
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    }
    render() {
        return (
            <form className="form" onSubmit={this.onSubmit}> 
                {this.state.error && <p className="form__error">{this.state.error}</p>}
                <input
                    type="text"
                    placeholder="Description"
                    autoFocus
                    className="text-input"
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                        // puts cursor on focus right on that input
                />
                <input
                    type="text"
                    placeholder="Amount"
                    className="text-input"
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                />
                <SingleDatePicker
                        date={this.state.createdAt} // momentPropTypes.momentObj or null
                        onDateChange={this.onDateChange} // PropTypes.func.isRequired
                        focused={this.state.calendarFocused} // PropTypes.bool
                        onFocusChange={this.onFocusChange} // PropTypes.func.isRequired
                        numberOfMonths={1}
                        // can also be modified for more complex app when you only want to show available days.
                        isOutsideRange={() => false}
                />
                <textarea
                        placeholder="Add a note for your expense (optional)"
                        className="textarea"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                >
                </textarea>
                <div>
                    <button className="button">Save Expense</button>
                </div>
            </form>
        )
    }
}

export default ExpenseForm