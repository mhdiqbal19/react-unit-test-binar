import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from './index'

Enzyme.configure({ adapter: new Adapter() })

test("Test Case For header", () => {
    const wrapper = shallow(<Header />)
    expect(wrapper).toMatchSnapshot();
})

