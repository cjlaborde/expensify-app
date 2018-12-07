import React from 'react'
import ReactShallowRenderer from 'react-test-renderer/shallow'
import Header from '../../components/Header'

test('should render Header correctly', () => {
    const renderer = new ReactShallowRenderer()
    renderer.render(<Header />)
    // https://jestjs.io/docs/en/expect#tomatchsnapshotpropertymatchers-snapshotname
    expect(renderer.getRenderOutput()).toMatchSnapshot()
})



// snapshots Allow us to Track Data Over time


/*
If it bad change that don't compare to the snapshot we choose to fix it or we delete it.

Steps to use react-test-renderer
1) Create new Renderer-->            const renderer = new ReactShallowRenderer()
2) Render something to it -->        renderer.render(<Header />)
3) We render getRenderOutput -->     expect(renderer.getRenderOutput()).toMatchSnapshot()
*/