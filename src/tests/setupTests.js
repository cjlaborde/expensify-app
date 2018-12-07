import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({
    adapter: new Adapter()
})

// https://jest-bot.github.io/jest/docs/configuration.html#setupfiles-array