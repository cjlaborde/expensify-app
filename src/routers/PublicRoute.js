import React from 'react'
import { connect } from 'react-redux' // Since we going to use redux store to check if user authenticated
import { Route, Redirect } from 'react-router-dom'

// export const PrivateRoute = (props) => {
export const PublicRoute = ({
    isAuthenticated, 
    component: Component,
    ...rest
}) => (
        <Route {...rest} component={(props) => (
            isAuthenticated ? (
                <Redirect to="/dashboard" />
            ) : (
                <Component {...props} />
            )
        )} />
    )

const mapStateToProps = (state) => ({
    // flip it to boolean value true or false with !!
    isAuthenticated: !!state.auth.uid
})
export default connect(mapStateToProps)(PublicRoute)

