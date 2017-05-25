import logic from '../logic';
import chai, { expect } from 'chai'

describe('logic - ', function() {
  it('is not empty', () => {
    expect(logic).not.to.be.empty;
    expect(logic).not.to.have.property('foo');
    expect(logic).to.have.property('sum');
    expect(logic).to.have.any.keys('bar', 'sum');
    expect(logic).to.have.all.keys('sum', 'randomKey');
    expect(logic).not.to.be.an('string');
    expect(logic).to.be.an('object');
    expect(logic).not.to.be.undefined;
    expect(logic).not.to.be.null;
    expect(logic).to.be.ok;
  });

  it('sum function sums numbers', () => {
    // This was jasmine testing
    // expect(logic.sum(1, 2)).toEqual(3);
    // expect(logic.sum(2, 2)).toEqual(4);

    // but using Chai
    expect(logic.sum(1, 2)).to.equal(3);
    expect(logic.sum(2, 2)).to.equal(4);
  });
 });