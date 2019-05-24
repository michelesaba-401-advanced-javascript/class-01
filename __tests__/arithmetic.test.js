'use strict';

const arithmetic = require('../lib/arithmetic.js');

describe('add', () => {
    it('adds two numbers', () => {
        const res = arithmetic.add(2, 4);
        expect(res).toBe(6)
    })
});
describe('subtracts', () => {
    it('subtracts', () => {
        const res = arithmetic.subtract(2, 4);
        expect(res).toBe(-2)
    })
});
describe('multiply', () => {
    it('multiplies two numbers', () => {
        const res = arithmetic.multiply(2, 4);
        expect(res).toBe(8)
    })
});
describe('division', () => {
    it('division', () => {
        const res = arithmetic.divide(12, 4);
        expect(res).toBe(3)
    })
});