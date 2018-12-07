// Higher Order Components (HOC) - A component (HOC) that renders another component
// Goals of HOC:
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state 

import React from 'react'
import ReactDOM from 'react-dom'

// None HOC 
const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
)

// ReactDOM.render(<Info info="These are the details" />, document.getElementById('app'))

// HOC component

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>This is private info. Please don't share!</p> }
            <WrappedComponent {...props}/>
        </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
        {props.isAuthenticated ? (<WrappedComponent {...props}/>): (
            <p> Please Log in</p>
        )}
        </div>

    )
}

// requireAuthentication

const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)

// ReactDOM.render(<AdminInfo isAdmin={true} info="These are the details" />, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={true} info="These are the details" />, document.getElementById('app'))