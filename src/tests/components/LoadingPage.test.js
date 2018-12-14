import React from 'react'
import { shallow } from 'enzyme';
import LoadingPage from '../../components/LoadingPage'

test('test loadingPage', () => {
    const wrapper = shallow(<LoadingPage />)
    expect(wrapper).toMatchSnapshot()
})
