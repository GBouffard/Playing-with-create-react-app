import myDog from '../dog';
import chai, { expect } from 'chai'

describe('myDog class', () => {
  describe('constructor function', () => {
    it('should respond', () => {
      expect(myDog).to.respondTo('constructor')
    });
  });
});