import myDog from '../dog';
import chai, { expect } from 'chai'

describe('myDog class', () => {
  const max = new myDog();
  const maxbarksInTheGarden = max.barksInTheGarden();

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
      expect(maxbarksInTheGarden).to.be.a('string');
      expect(maxbarksInTheGarden).to.equal('Woof! Woof! WOOF!!');
    });
  });

  describe('fetchBalls function', () => {
    it('satisfy conditions', () => {
      for (let i = 0; i < 5; i++) {
        max.fetchBalls();
      }
      expect(max.fetchedBalls).to.be.a('number');
      expect(max.fetchedBalls).to.equal(5);
      expect(max.fetchedBalls).to.satisfy((num) => num > 4);
      expect(max.fetchedBalls).to.satisfy(function(num) {
        return num < 6;
      });
    });
  });

  describe('instance of', () => {
    it('testing the instance of myDog', () => {
      expect(max).to.be.an.instanceof(myDog);
    });

    it('testing that the instance responds to the barksInTheGarden function', () => {
      expect(max).to.respondTo('barksInTheGarden');
      expect(max).not.to.respondTo('miaowInTheKitchen');
      expect(max).to.be.an('object').that.respondsTo('barksInTheGarden');
    });
  });
});