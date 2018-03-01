import React from 'react';
import floatingDuck from '../public/images/floating_duck.jpg';

const CSSPositioning = () => {
  return (
    <div>
      <h3>
        position: static / relative / absolute / fixed / sticky
      </h3>

      <div
        className="positioning positioning--static">
        This div's position is static (default value)<br/>
        (within the normal document flow)
      </div>

      <div
        className="positioning positioning--relative">
        This div's position is relative (relative to its own position)<br/>
        (within the normal document flow)
      </div>

      <div
        className="positioning positioning--absolute">
        This div's position is absolute (relative to its parent/html)<br/>
        OUT of the document flow<br/>
        Also, though absolutely positioned boxes have MARGINS
      </div>

      <div
        className="positioning positioning--absolute">
        A second absolute positionned div will be a the same position as the previous div.<br/>
        it's positionned after the last element within the document flow
      </div>

      <div
        className="positioning positioning--fixed">
        This div's position is fixed (similar to absolute HOWEVER unaffected by scrolling)<br/>
        OUT of the document flow<br/>
        Also, just like absolute positioned boxes, fixed boxes have MARGINS
      </div>

      <div
        className="positioning positioning--sticky">
        This div's position is sticky (behaves like a relative until it reaches a specified threshold, at which it behaves like fixed)<br/>
        (within the normal document flow)
      </div>

      <br/>
      <h3>
        float: left / right
      </h3>

      <div
        className="positioning positioning--float">
        This div is a float (float: right)<br/>
        (within the normal document flow)<br/>
        Can be left / right / none / inherit<br/>
        affects the position of other elements<br/>
        </div>
      <br/>

      <div
        className="positioning--parent-container positioning--parent-float">
        <img
          className="positioning--floating-duck"
          src={floatingDuck} />
        In its simplest use, the float property can be used to wrap text around images. In this example the floating duck is on the right but it can be moved on the left with float: left.
      </div>

      <h3>
        z-index
      </h3>

      <div
        className="positioning-z-index positioning--absolute positioning--z-index-1">
        A position absolute div...by default under the next div<br/>
        but not with a positive z-index.
      </div>

      <div
        className="positioning-z-index positioning--relative">
        A position relative div to illustrate z-index<br/>
        z-index will only work on an element whose position property has been explicitly set to absolute, fixed, or relative. 
      </div>

      <h3>
        the box-model
      </h3>

      <div>
        <div
          className="positioning positioning--box-model">
          Box model div<br/>
          box-sizing: border-box / content-box
        </div>
      </div>

      <h3>
        inline vs inline-block
      </h3>

      <div
        className="positioning--parent-container positioning--inline-block-parent">
        <div
          className="positioning--inline-block">
          display: block takes the full width of its parent<br/>
          inline and inline-block's width depends on content<br/>
          inline-block treats width as a block. inline treats each sub-content' width individually<br/>
          Also; with inline VERTICAL (and not horizontal) margins and paddings appear around the content.
        </div>
      </div>

      <h3>
        Clearing
      </h3>

      <div>
        <img
          className="positioning--floating-duck"
          src={floatingDuck} />
        <div
          className="positioning positioning--clearing">
          clear:both<br/>
          To not allow floating elements on the left or the right side<br/>
          overflow: auto / overlay / hidden also work<br/>
          overflow specifies what happens if content overflows an element box
        </div>
      </div>
    </div>
  );
}

export default CSSPositioning;