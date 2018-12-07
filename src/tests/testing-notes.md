example expenses.test.js
expenseReducer
1) pass some data in
2) we get something back
3) and we insert something to what comes back


For components is different 
since we need to check what renders under some situations.
If I was a props to component I expect it to run one way

So we use snapshop testing to tesyt components instead






// react-test-render allow us to render our components
// Inside regular javascript code then we assert something that got rendered

// We got 2 ways to check react components
    // we got shalllow rendering
        // Ony renders giving component
    // We got full dom rendering
        // full dom rendering renders child component
        // it would fail in Header since the NavLinks would be expected to be used in the router