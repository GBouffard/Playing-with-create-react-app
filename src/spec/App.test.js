import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme';
import App from '../App';

describe('main App - ', () => {
  chai.use(chaiEnzyme);
  const appWrapper = shallow(<App />);

  it('renders', () => {
    expect(appWrapper).to.have.length(1);
    expect(appWrapper).to.have.length.above(0);
    expect(appWrapper).to.have.length.of.at.least(1);
    expect(appWrapper).to.have.length.below(4);
    expect(appWrapper).to.have.length.of.at.most(3);
  });

  xit('renders the welcome message', () => {
  });
});