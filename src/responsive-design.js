import React from 'react';
import MediaQuery from 'react-responsive';

const ResponsiveDesign = () => {
  const reactResponsiveDiv = (
    <div
      className="responsive-design-div">
      - ideal when a complete different component needs to be rendered<br/>
      - as opposed to modifying/updating the css.<br/><br/>
      Example: a basktet ball image will replace that div content at breakpoint 600px.
    </div>
  );

  const basketballImage = (
    <img
      className="basketball-image"
      src="./images/basketball.png" />
  );

  return (
    <div>
      <h3>
        Responsive Design - Using CSS media queries in CSS:
      </h3>

      <img
        className="responsive-design"/>

      <div
        className="responsive-div">
        Other media queries include:<br/>
        orientation: landscape / Retina graphics / aspect-ratio / resolution and more
      </div>

      <h3>
        Responsive Design - Using React-responsive:
      </h3>

      <MediaQuery
        minWidth={600}>
        {(matches) => {
          return (matches) ? reactResponsiveDiv : basketballImage;
        }}
      </MediaQuery>

      <h3>
        Adaptive Design:
      </h3>

      <div
        className="responsive-div">
        Need to to try modernizr browser detection
      </div>

      {/*
        navigator.userAgent.match(/Firefox/);
        navigator.userAgent.match(/Chrome/);
        navigator.userAgent.match(/Safari/);
      */}

      <h3>
        - even if not CSS, html lang="en"
      </h3>
    </div>
  );
}

export default ResponsiveDesign;