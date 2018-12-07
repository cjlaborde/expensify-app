import React from 'react'
import { shallow } from 'enzyme'
// import name export | We don't want connected version to Redux we want the unconnected version so we can dynamically pass those props to make sure it renders correctly.
import { ExpenseList } from '../../components/ExpenseList'
import expenses from '../fixtures/expenses'

test('should render ExpenseList with expsenses', () => {
    // requires props so you need to add it
    const wrapper = shallow(<ExpenseList expenses={expenses} />)
    expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseList with empty message', () => {
    const wrapper = shallow(<ExpenseList expenses={[]} />)
    expect(wrapper).toMatchSnapshot()
})