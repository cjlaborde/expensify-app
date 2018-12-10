import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import DotEnv from 'dotenv'

DotEnv.config({ path: '.env.test'  })

Enzyme.configure({
    adapter: new Adapter()
})

// https://jest-bot.github.io/jest/docs/configuration.html#setupfiles-arrayww