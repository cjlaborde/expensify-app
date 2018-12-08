import React from 'react'
import { shallow } from 'enzyme'
import ExpensesSummary from '../../components/ExpensesSummary';
// import { Link } from 'react-router-dom'

test('Should correctly render ExpensesSummary with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary />)
    expect(wrapper).toMatchSnapshot()
})

test('Should correctly render ExpensesSummary with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={235543535}/>)
    expect(wrapper).toMatchSnapshot()
})

