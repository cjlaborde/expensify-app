const add = (a, b) => a + b
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`
/*

test('should add two numbers', () => {
    const result = add(3, 4)

    if (result !== 7) {
        throw new Error(`You added 4 and 3. The result was ${result}. Expect 7`)
    }
})

*/

test('should add two numbers', () => {
    const result = add(3, 4)
    expect(result).toBe(7)
})

test('should return the correct name', () => {
    const greeting = generateGreeting('John')
    expect(greeting).toBe(`Hello John!`)
})

test('should generate greeting for no name', () => {
    const result = generateGreeting()
    expect(result).toBe('Hello Anonymous!')
})