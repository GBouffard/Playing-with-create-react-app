import React from 'react';

const Accessibility = () => {
  return (
    <div>
      <h3>
        Accessibility / CMD + F5 to activate 
      </h3>

      <div
        className="accessibility">
          Accessible Form Controls: 
          - Text inputs - Textareas - Checkboxes - Radio buttons - Select menus - Buttons - Image buttons - JavaScript jump menus
          <br/><br/>div and spans are not!
      </div>

      <textarea
        rows="5"
        cols="100"
        className="accessibility"
        aria-describedby="aria-reference">
        A textarea tag - input using aria-describedby...more text to be read
      </textarea>
      <div
        id="aria-reference"
        className="visibility-hidden">
        This did that is below and use visibility hidden will be read because of the aria describedby reference.
      </div>
    </div>
  );
}

export default Accessibility;