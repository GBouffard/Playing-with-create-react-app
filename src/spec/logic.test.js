import logic from '../logic';
import chai, { expect } from 'chai'

describe('logic - ', function() {
  it('is not empty', () => {
    expect(logic).not.to.be.empty;
    expect(logic).not.to.have.property('foo');
    expect(logic).to.have.property('sum');
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