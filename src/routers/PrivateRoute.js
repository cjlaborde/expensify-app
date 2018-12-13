import React from 'react'
import { connect } from 'react-redux' // Since we going to use redux store to check if user authenticated
import { Route, Redirect } from 'react-router-dom'
import Header from '../components/Header';

// export const PrivateRoute = (props) => {
export const PrivateRoute = ({
    isAuthenticated, 
    component: Component,
    // when we destructiring objects we use rest operator to get variable called ..rest to get varaible called rest
    //  with all variables that were not with all stuff we didn't distructure can be called any name like ...props as well     <Route {...props} />
    ...rest
}) => (
    <Route {...rest} component={(props) => (
        isAuthenticated ? (
            <div>
                <Header />
                <Component {...props} />
            </div>
        ) : (
            // redirect us to login page if we are not logged in
            <Redirect to="/" />
        )
    )} />
)

const mapStateToProps = (state) => ({
    // flip it to boolean value true or false with !!
    isAuthenticated: !!state.auth.uid
})
export default connect(mapStateToProps)(PrivateRoute)