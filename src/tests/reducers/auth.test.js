import authReducer from '../../reducers/auth'
 
test('should set uid for login ', () => {
    const action = {
        type: 'LOGIN',
        uid: '1234b'
    }
    const state = authReducer({}, action)
    // we can expect the id is on return of the state
    expect(state.uid).toEqual(action.uid)
})

test('should clear uid for logout ', () => {
    const action = {
        type: 'LOGOUT'
    }
    // clear LOGOUT clears id as it should.
    const state = authReducer({ uid: 'anything'}, action)
    expect(state).toEqual({})
})
