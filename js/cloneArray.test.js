const cloneArray = require('./cloneArray');


test('properly clone array- .toEqual(arr)', ()=>{
    const arr = [1,2,3]
    expect(cloneArray(arr))
    .toEqual(arr) // pass the teset
    }
    
)

test('properly clone array- .toBe(arr) ', ()=>{
    const arr = [1,2,3]
    expect(cloneArray(arr))
    .toBe(arr)    // fail the test as they store in different memory address
    }
)

test('properly clone array- .not.toBe(arr) ', ()=>{
    const arr = [1,2,3]
    expect(cloneArray(arr))
    .not.toBe(arr)    // pass the teset
    }
)