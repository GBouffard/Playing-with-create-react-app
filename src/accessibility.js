import React from 'react'

const Accessibility = () => {
  return (
    <div>
      <h3>
        Accessibility / CMD + F5 to activate
      </h3>

      <textarea
        className='height-width-zero'>
        this textarea with width zero and height zero is being read because it's detected but not visible on the page.
      </textarea>

      <textarea
        className='outside-of-the-screen'>
        this textarea with width position absolute and left minus nine nine nine nine nine pixels is being read because it's detected but not visible on the page.
      </textarea>

      <div
        className='accessibility-div'>
          Accessible Form Controls:
          - Text inputs - Textareas - Checkboxes - Radio buttons - Select menus - Buttons - Image buttons - JavaScript jump menus
        <br /><br /><b>div and spans are not!</b>
      </div>

      <textarea
        rows='5'
        cols='100'
        className='accessibility'
        aria-describedby='aria-reference'>
        A textarea tag - input using aria-describedby...more text to be read
      </textarea>
      <div
        id='aria-reference'
        className='visibility-hidden'>
        This did that is below and use visibility hidden will be read because of the aria describedby reference.
      </div>

      <div
        className='accessibility-div'>
        aria-hidden="true" --> the screenreader ignores that content (but will read he content of aria-describedby if an Id is referenced)<br />
        aria-disabled="true" --> the screenreader ignores that content<br />
        aria-required="true" --> Indicates that user input is required on the element before a form may be submitted.
      </div>
    </div>
  )
}

export default Accessibility
