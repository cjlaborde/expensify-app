import React from 'react'
import { shallow } from 'enzyme'
import expenses from '../fixtures/expenses'
import ExpensesSummary from '../../components/ExpensesSummary';
// import { Link } from 'react-router-dom'

test('Should render ExpensesSummary correctly', () => {
    const wrapper = shallow(<ExpensesSummary { ...expenses[0] } />)
    expect(wrapper).toMatchSnapshot()
})