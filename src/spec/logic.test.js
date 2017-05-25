import logic from '../logic';

describe('logic - ', function() {
  it('sum function sums numbers', () => {
    expect(logic.sum(1, 2)).toEqual(3);
    expect(logic.sum(2, 2)).toEqual(4);
  });
 });