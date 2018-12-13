import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../actions/auth'


export const LoginPage = ({ startLogin }) => (
    <div>
        <button onClick={startLogin} >Log In</button>
    </div>
)

// <button onClick={ this.props.history.push('/dashboard') }>Log In</button>

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)