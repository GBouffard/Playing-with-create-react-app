import React from 'react';

const CSSPositioning = () => {
  return (
    <div>
      <div
        className="positioning positioning--static">
        This div's position is static
      </div>

      <div
        className="positioning positioning--relative">
        This div's position is relative
      </div>

      <div
        className="positioning positioning--absolute">
        This div's position is absolute
      </div>

      <div
        className="positioning positioning--fixed">
        This div's position is fixed
      </div>

      <div
        className="positioning positioning--sticky">
        This div's position is sticky
      </div>

      <br/>
      <br/>
      Still to come: <br/>
      - float<br/>
      - z-index<br/>
      - Box Model<br/>
      - inline vs inline-block<br/>
      - div style="clear:both; / Clearfix method / overflow: auto or overflow: hidden<br/>
    </div>
  );
}

export default CSSPositioning;