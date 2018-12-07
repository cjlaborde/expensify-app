import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseForm with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[1]}  />)
    expect(wrapper).toMatchSnapshot()
})

test('should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />)
    // you can have as many snapshot as needed// have one before I make changes and one after
    expect(wrapper).toMatchSnapshot()
    // https://airbnb.io/enzyme/docs/api/ShallowWrapper/simulate.html if no form is submited can't be tested
    wrapper.find('form').simulate('submit', {
        // this fix error of undefined e.preventDefault so we need to fake it to fix error.
        preventDefault: () => { }
    })
    // https://airbnb.io/enzyme/docs/api/ShallowWrapper/state.html
    expect(wrapper.state('error').length).toBeGreaterThan(0)
    // to make sure error always renders correctly
    expect(wrapper).toMatchSnapshot()
})

/**
 Goals:
 1) Render expense form
 2) Change input
 3) Make an asumption
 */

test('should set description on input change', () => {
    const value = 'New description'
    // 1) Render expense form
    const wrapper = shallow(<ExpenseForm />)
    // 2) access the element
    // https://airbnb.io/enzyme/docs/api/ShallowWrapper/at.html
    wrapper.find('input').at(0).simulate('change', {
        // description = e.target.value (create object with value)
        target: { value }
    })
    expect(wrapper.state('description')).toBe(value)
})

test('should set note on textarea change', () => {
    const value = 'New note value'
    const wrapper = shallow(<ExpenseForm />)
    // no need for at(0) since there is only 1.
    wrapper.find('textarea').simulate('change', {
        target: { value }
    })
    expect(wrapper.state('note')).toBe(value)
})

test('should set amount if valid input', () => {
    const value = '23.59'
    const wrapper = shallow(<ExpenseForm />)
    // no need for at(0) since there is only 1.
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    })
    expect(wrapper.state('amount')).toBe(value)

})

test('should not set amount if valid input', () => {
    const value = '23.590'
    const wrapper = shallow(<ExpenseForm />)
    // no need for at(0) since there is only 1.
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    })
    expect(wrapper.state('amount')).toBe('')
})
/**
 Steps:::
 1) Render expense form with valid data using one of fixture data
 2) Simulate the submition 
 3) Make sure state is clear     expect(wrapper.state('amount')).toBe('')
 4) ??? use spies
 Make sure onSubmit call was called with this object

 spies are fake functions:::

 https://jest-bot.github.io/jest/docs/expect.html#tohavebeencalled
 */

// test('should call onSubmit prop for valid form submission', () => {
//     const onSubmitSpy = jest.fn()
//     onSubmitSpy() // it would pass since we called it here
//     // check if spy was called. If not it shows an error.
//     expect(onSubmitSpy).toHaveBeenCalled()
// })
// test('should call onSubmit prop for valid form submission', () => {
//     const onSubmitSpy = jest.fn()
//     onSubmitSpy('Andrew') // it would pass since we called it here
//     // check if spy was called. If not it shows an error.
//     expect(onSubmitSpy).toHaveBeenCalledWith('Andrew', 'Philadelphia')
// })



test('should call onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn()
    // pass onSubmit || since the component does call it this.props.onSubmit 
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />)
    // step #2 simulate form submit you can take code above since we did it already
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { } 
    })
    expect(wrapper.state('error')).toBe('')
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt
    })
})

// test('should set new date on date change', () => {
//     const now = moment();
//     const wrapper = shallow(<ExpenseForm />);
//     // https://airbnb.io/enzyme/docs/api/ShallowWrapper/prop.html
//     wrapper.find('SingleDatePicker').prop('onDateChange')(now);
//     expect(wrapper.state('createdAt')).toEqual(now);
// });

// test('should set calendar focus on change', () => {
//     const focused = true;
//     const wrapper = shallow(<ExpenseForm />);
//     // https://airbnb.io/enzyme/docs/api/ShallowWrapper/prop.html
//     wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused });
//     expect(wrapper.state('calenderFocused')).toBe(focused);
// });


/*

We need to access  onDateChange={this.onDateChange} // PropTypes.func.isRequired

<SingleDatePicker
date={this.state.createdAt} // momentPropTypes.momentObj or null
onDateChange={this.onDateChange} // PropTypes.func.isRequired
focused={this.state.calendarFocused} // PropTypes.bool
onFocusChange={this.onFocusChange} // PropTypes.func.isRequired
numberOfMonths={1}
// can also be modified for more complex app when you only want to show available days.
isOutsideRange={() => false}
/>
*/