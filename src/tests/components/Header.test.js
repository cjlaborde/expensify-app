import React from 'react'
import { shallow } from 'enzyme';
import {Header} from '../../components/Header'



test('should render Header correctly', () => {
    const wrapper = shallow(<Header startLogout={() => {

    }} />)
    expect(wrapper).toMatchSnapshot()

    // https://airbnb.io/enzyme/docs/api/ShallowWrapper/text.html
    // expect(wrapper.find('h1').text()).toBe('Expensify')
    // expect(wrapper.find('h1').length).toBe(1) // woud fail if there was more than 1 h1
    // const renderer = new ReactShallowRenderer()
    // renderer.render(<Header />)
    // // https://jestjs.io/docs/en/expect#tomatchsnapshotpropertymatchers-snapshotname
    // expect(renderer.getRenderOutput()).toMatchSnapshot()
})

test('should call startLogout on button click', () => {
    const startLogout = jest.fn()
    const wrapper = shallow(<Header startLogout={startLogout} />)
    wrapper.find('button').simulate('click')
    expect(startLogout).toHaveBeenCalled()

})
