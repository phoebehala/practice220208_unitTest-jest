const subtract = require('.//subtract')

test('properly subtracts two members',()=>{
    expect(subtract(5,3))
    .toBe(2)
})