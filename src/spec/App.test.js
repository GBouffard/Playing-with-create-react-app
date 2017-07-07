import React from 'react';
import { shallow, render } from 'enzyme';
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
    const hideMeButtonReact = <Button text="HIDE ME" className="hideButton" />;

    it('renders within the app', () => {
      // prints the whole node structure. Pretty useful to debug
      // console.log(appWrapper.debug());
      expect(appWrapper.containsMatchingElement(hideMeButtonReact)).to.equal(true);
    });

    it('changes the className of the button when clicked', () => {
      const hideMeButtonWrapper = appWrapper.find('.hideButton');
      // many of the Shallow API methods return booleans
      expect(hideMeButtonWrapper.exists()).to.equal(true);
      expect(hideMeButtonWrapper.hasClass('hideButton')).to.equal(true);

      hideMeButtonWrapper.simulate('click');

      const hiddenStateButtonReact = <Button text="HIDE ME" className="hideButton hiddenState" />;
      expect(appWrapper.containsMatchingElement(hideMeButtonReact)).to.equal(false);
      expect(appWrapper.containsMatchingElement(hiddenStateButtonReact)).to.equal(true);
    });

    // WILL TRY WITH NIGHTWATCH
    // it('disappears when has been clicked', () => {
      // const hiddenStateButtonReact = <Button text="HIDE ME" className="hideButton hiddenState" />;
      // const hiddenButtonWrapper = appWrapper.find('.hideButton hiddenState');
      // // // const hiddenStateButton = document.getElementsByClassnames("hideButton hiddenState")[0];
      // console.log(hiddenButtonWrapper.style);
      // expect(hiddenButtonWrapper.style).to.equal(true);
      // expect(hiddenStateButtonReact).to.have.style('display', 'none');

    // });
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

    const changeLanguageButtonWrapper = appWrapper.find('.changeLanguageButton');
    it('modifies the Hello greeting to Bonjour when the frenchify button is clicked', () => {
      // Shallow from enzyme gives the following method: wrapper.simulate(event[, ...args])
      changeLanguageButtonWrapper.simulate('click');
      expect(appWrapper.text()).not.to.contain('Hello');
      expect(appWrapper.text()).to.contain('Bonjour');
    });

    it('modifies the Bonjour greeting back to Bonjour when the Englishfy button is clicked', () => {
      changeLanguageButtonWrapper.simulate('click');
      expect(appWrapper.text()).to.contain('Hello');
      expect(appWrapper.text()).not.to.contain('Bonjour');
    });
  });
});
