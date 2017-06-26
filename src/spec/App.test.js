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
  });

  describe('Welcome message', () => {
    it('renders', () => {
      const welcomeWrapper = appWrapper.find('h2');
      expect(welcomeWrapper.text()).to.match(/Welcome to React/);
      expect(welcomeWrapper.text()).to.include('Welcome to React');

      const welcomeMessageNode = <h2>Welcome to React</h2>;
      // .containsMatchingElement(node) returns a Boolean
      expect(appWrapper.containsMatchingElement(welcomeMessageNode)).to.equal(true);
    });
  });
});
