import assert from 'assert';
import {describe,it} from "./test/test.js"
import { fibonacci } from './algorithms/fibonacci.js';
import { factorial, recursiveFactorial } from './algorithms/factorial.js';
import { isPrime } from './algorithms/prime.js';
import { isPowerOfTwo } from './algorithms/powerOfTwo.js';
import { palindrom } from './algorithms/recursive.js';
import { linearSearch } from './algorithms/search.js';


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
        assert.equal(recursiveFactorial(3),6);
    });
    it('Should be 120', () => {
        assert.equal(recursiveFactorial(5),120);
    });
    
 })

describe('Prime Test', () => { 
    it('1 Should not be prime', () => {
        assert.strictEqual(isPrime(1),false);
    });
    it('4 Should not be prime', () => {
        assert.strictEqual(isPrime(4),false);
    });
    it('19 Should be prime', () => {
        assert.strictEqual(isPrime(19),true);
    });
    
 })

 describe('Power Of Two Test', () => { 
    it('Should be true', () => {
        assert.strictEqual(isPowerOfTwo(4),true);
    });
    it('Should be false', () => {
        assert.strictEqual(isPowerOfTwo(18),false);
    });
    it('Should be true', () => {
        assert.strictEqual(isPowerOfTwo(16),true);
    });
    
 })

 describe("Palindrome recursive",() => {
    it("MADAM Should be true",() => {
        assert.strictEqual(palindrom("madam"),true);
    })
    it("LEVEL Should be true",() => {
        assert.strictEqual(palindrom("level"),true);
    })
    it("YANJAY Should be false",() => {
        assert.strictEqual(palindrom("yanjay"),false);
    })
 })


 describe('Test linear search', () => { 
    it('10 , should be found in index 4', () => {
        assert.deepStrictEqual(linearSearch([-5,4,5,6,10],10),4)
    });
    
 })