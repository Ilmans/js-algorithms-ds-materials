import assert from 'assert';
import {describe,it} from "./test/test.js"
import { fibonacci } from './algorithms/fibonacci.js';
import { factorial } from './algorithms/factorial.js';
import { isPrime } from './algorithms/prime.js';


// fibonacci
describe("Fibonacci test",() => {
    it("should be [0,1]",() => {
        assert.deepStrictEqual(fibonacci(2),[0,1]);
    })
    it("should be [0,1,1,2,3,5,8]",() => {
        assert.deepStrictEqual(fibonacci(7),[0,1,1,2,3,5,8]);
    })
})

describe('Factorial Test', () => { 
    it('Should be 6', () => {
        assert.equal(factorial(3),6);
    });
    it('Should be 120', () => {
        assert.equal(factorial(5),120);
    });
    
 })

describe('Prime Test', () => { 
    it('1 Should not be prime', () => {
        assert.strictEqual(isPrime(1),false);
    });
    it('4 Should not be prime', () => {
        assert.strictEqual(isPrime(4),false);
    });
    it('5 Should be prime', () => {
        assert.strictEqual(isPrime(5),true);
    });
    it('19 Should be prime', () => {
        assert.strictEqual(isPrime(19),true);
    });
    
 })