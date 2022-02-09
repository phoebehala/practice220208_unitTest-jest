const { expect } = require('@jest/globals');
const sum =require('./sum');

it(`properly adds two members`, ()=>{
    expect(sum(1,2))
    .toBe(3)
})
it(`properly adds two members`, ()=>{
    expect(sum(1,2))
    .toBeNull() 
})
