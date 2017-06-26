import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme';
import App from '../App';
import SnapShotLink from '../snapshot_link';
import Button from '../Button';

describe('main App - ', () => {
  chai.use(chaiEnzyme);
  const appWrapper = shallow(<App />);

  it('renders', () => {
    expect(appWrapper).to.have.length(1);
  });

  describe('Welcome message', () => {
    it('renders within the app', () => {
      const welcomeWrapper = appWrapper.find('h2');
      expect(welcomeWrapper.text()).to.match(/Welcome to React/);
      expect(welcomeWrapper.text()).to.include('Welcome to React');

      const welcomeMessageNode = <h2>Welcome to React</h2>;
      // .containsMatchingElement(reactNode) returns a Boolean and compares against a React element
      expect(appWrapper.containsMatchingElement(welcomeMessageNode)).to.equal(true);
    });
  });

  describe('Hide me button', () => {
    it('renders within the app', () => {
      // prints the whole node structure. Pretty useful to debug
      console.log(appWrapper.debug());
      const hideMeButtonReact = <Button text="HIDE ME" className="buttonStyle" />;
      expect(appWrapper.containsMatchingElement(hideMeButtonReact)).to.equal(true);
    });
  });

  describe('Snapshot link', () => {
    it('renders within the app', () => {
      const snapShotLinkReact = (
        <SnapShotLink page="http://www.thulium69.com/">
          Thulium (my band)
        </SnapShotLink>
      );
      expect(appWrapper.containsMatchingElement(snapShotLinkReact)).to.equal(true);
    });
  });

  describe('Change language button', () => {
    it('renders within the app', () => {
      const changeLanguageButtonReact = <Button text="Frenchify" className="changeLanguageButton" />;
      expect(appWrapper.containsMatchingElement(changeLanguageButtonReact)).to.equal(true);
    });

    it('contains the associated text within the app', () => {
      expect(appWrapper.text()).to.contain('Hello');
      expect(appWrapper.text()).to.include('Hello');
    });
  });
});
