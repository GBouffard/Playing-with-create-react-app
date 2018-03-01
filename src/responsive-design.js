import React from 'react';

const ResponsiveDesign = () => {
  return (
    <div>
      <h3>
        Responsive Design:
      </h3>

      <img
        className="responsive-design"/>

      <div
        className="responsive-div">
        Other media queries include:<br/>
        orientation: landscape / Retina graphics / aspect-ratio / resolution and more
      </div>

      <h3>
        Adaptive Design:
      </h3>

      <div
        className="responsive-div">
        Need to to try modernizr browser detection
      </div>

      <h3>
        - even if not CSS, html lang="en"
      </h3>
    </div>
  );
}

export default ResponsiveDesign;