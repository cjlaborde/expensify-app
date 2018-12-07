import React from 'react'
import { shallow } from 'enzyme'
import expenses from '../fixtures/expenses'
import ExpenseListItem from '../../components/ExpenseListItem'
// import { Link } from 'react-router-dom'

test('Should render ExpenseListItem correctly', () => {
    const wrapper = shallow(<ExpenseListItem { ...expenses[0] } />)
    expect(wrapper).toMatchSnapshot()
})