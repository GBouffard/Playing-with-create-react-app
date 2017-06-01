import myDog from '../dog';
import chai, { expect } from 'chai'

describe('myDog class', () => {
  describe('constructor function', () => {
    it('should respond', () => {
      expect(myDog).to.respondTo('constructor')
    });
  });

  describe('barksInTheGarden function', () => {
    it('should respond', () => {
      expect(myDog).to.respondTo('barksInTheGarden')
    });

    it('works', () => {
      const dog = new myDog();
      expect(dog.barksInTheGarden()).to.equal('Woof! Woof! WOOF!!');
    });
  });
});