import React from 'react'
import Button from '../Button'
import App from '../App'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

describe('Change language Button', () => {
  const mockChangeLanguage = jest.fn()

  describe('Unit Test', () => {
    it('renders and matches its snapshot', () => {
      // Using renderer.create from react-test-renderer to test a snapshot.
      const component = renderer.create(
        <Button
          text='Language'
          className='whatever'
          onClick={mockChangeLanguage} />
      )
      let tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    })

    it('calls the passed-in changeLanguage function when clicked', () => {
      // Using shallow from enzyme to test a mocked function.
      const buttonWrapper = shallow(
        <Button
          text='Language'
          className='whatever'
          onClick={mockChangeLanguage} />
      )
      buttonWrapper.simulate('click')
      expect(mockChangeLanguage).toBeCalled()
    })
  })

  describe('Functional Test - within the App test', () => {
    // Using shallow from enzyme to simulate the container (the whole app) where the button is
    const appWrapper = shallow(<App />)

    it('is present with initial state text', () => {
      const languageButtonHtml = '<button class="changeLanguageButton">Frenchify</button>'
      expect(appWrapper.html()).toContain(languageButtonHtml)
    })

    it('also has the English greeting associated to it present on the page', () => {
      expect(appWrapper.text()).toContain('Hello')
    })

    // from the ShallowWrapper API: .find(selectorString) --> using class used once as selector in my case
    const changeLanguageButton = appWrapper.find('.changeLanguageButton')

    it('modifies the Hello greeting to Bonjour when the frenchify button is clicked', () => {
      changeLanguageButton.simulate('click')
      expect(appWrapper.text()).not.toContain('Hello')
      expect(appWrapper.text()).toContain('Bonjour')
    })

    it('modifies the Bonjour greeting back to Bonjour when the Englishfy button is clicked', () => {
      changeLanguageButton.simulate('click')
      expect(appWrapper.text()).toContain('Hello')
      expect(appWrapper.text()).not.toContain('Bonjour')
    })
  })
})
