'use strict'

const greet = require("../lib/greet.js");

describe('greet', () => {
    it('says hello', () => {
        const res = greet('john');
        expect(res).toBe('hello, john')
    })
});

describe('greet', () => {
    it('says hello name', () => {
        const res = greet(name);
        expect(res).toBe(`hello, ${name}`)
    })
});