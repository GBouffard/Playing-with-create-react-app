import logic from '../logic';
import chai, { expect } from 'chai'

describe('logic - ', function() {
  it('is not empty', () => {
    expect(logic).not.to.be.empty;
    expect(logic).not.to.have.property('foo');
    expect(logic).to.have.property('sum');
    expect(logic).to.have.ownProperty('sum');
    expect(logic).to.have.any.keys('bar', 'sum');
    expect(logic).to.include.keys('myArray');
    expect(logic).to.have.all.keys('sum', 'myString', 'myArray', 'myBoolean', 'toggleBoolean', 'myNumber', 'addToNumber', 'substractToNumber');
    expect(logic).to.contain.all.keys('myArray', 'myBoolean');
    expect(logic).to.contain.any.keys({ 'myBoolean': false });
    expect(logic).not.to.be.an('string');
    expect(logic).to.be.an('object');
    expect(logic).not.to.be.undefined;
    expect(logic).not.to.be.null;
    expect(logic).to.be.ok;
  });

  it('multiple properties - ', () => {
    it('a string - multiple tests', () => {
      expect(logic.myString).to.be.a('string');
      expect(logic.myString).to.match(/^this is/);
      expect(logic.myString).to.contain('my value');
      expect(logic.myString).not.to.contain('whatever');
      expect(logic.myString).to.have.string('is my');
      expect(logic.myString).to.not.be.true;
    });

    it('an array - multiple tests', () => {
      expect(logic.myArray).to.be.a('array');
      expect(logic.myArray).to.include(2);
      expect(logic.myArray).to.have.length(5);
      expect(logic.myArray).to.have.length.within(3,7);
      expect(logic.myArray).to.have.length.above(3);
      expect(logic.myArray).to.have.length.of.at.least(4);
      expect(logic.myArray).to.have.length.below(7);
      expect(logic.myArray).to.have.length.of.at.most(5);
      expect(logic.myArray[2]).to.be.within(0, 5);
      expect(logic.myArray).to.include.members([3, 2]);
      expect(logic.myArray).to.not.include.members([3, 2, 8]);
      expect(logic.myArray).to.have.members([5, 3]);
      expect(logic.myArray).to.not.have.members([1, 2, 3, 4, 5, 6]);
      expect(logic.myArray[0]).to.be.oneOf([0, 6, 9]);
    });

    it('a boolean - multiple tests', () => {
      expect(logic.myBoolean).to.exist;
      expect(logic.myBoolean).to.be.false;
      expect(logic.myBoolean).not.to.be.true;
      expect(logic.myBoolean).to.not.be.true;
    });
  });

  it('sum function sums numbers', () => {
    // This was jasmine testing
    // expect(logic.sum(1, 2)).toEqual(3);
    // expect(logic.sum(2, 2)).toEqual(4);

    // but using Chai
    expect(logic.sum(1, 2)).to.equal(3);
    expect(logic.sum(2, 2)).to.equal(4);
    expect(logic.sum(2, 2)).to.satisfy(function(num) { return num > 3; });
    expect(logic.sum(2, 2)).to.be.closeTo(3, 1); // closeTo(expected, within a +/- delta range)
  });

  it('toggleBoolean function changes the value of myBoolean property', () => {
    // to.change(object, property)
    expect(logic.toggleBoolean).to.change(logic, 'myBoolean');
  });

  it('addToNumber function increases the value of myNumber property', () => {
    expect(logic.addToNumber).to.increase(logic, 'myNumber');
  });

  it('substractToNumber function decreases the value of myNumber property', () => {
    expect(logic.substractToNumber).to.decrease(logic, 'myNumber');
  });
});
