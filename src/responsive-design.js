import React from 'react'
import MediaQuery from 'react-responsive'
import styled from 'styled-components'

const ResponsiveDesign = () => {
  const reactResponsiveDiv = (
    <div
      className='responsive-design-div'>
      - ideal when a complete different component needs to be rendered<br />
      - as opposed to modifying/updating the css.<br /><br />
      Example: a basktet ball image will replace that div content at breakpoint 600px.
    </div>
  )

  const basketballImage = (
    <img
      className='basketball-image'
      alt='this is a basketball icon'
      src='./images/basketball.png' />
  )

  const StyledSectionExample = styled.section`
    display: flex;
    padding: .5rem;
    width: 400px;
    font-size: .7rem;
    margin: 0 auto;
    background: lightgoldenrodyellow;
    color: saddlebrown;
    border: .1rem solid;

      @media (min-width: 600px) {
        color: darkblue;
        background: lightskyblue;
      }

       @media (min-width: 768px) {
        color: darkgreen;
        background: palegreen;
      }

       @media (min-width: 1024px) {
        color: darkred;
        background: lightpink;
      }
    }
  `

  const InitialDiv = ({ className, children }) => (
    <div
      className={className}>
      {children}
    </div>
  )

  const StyledDiv = styled(InitialDiv)`
    display: block;
    margin: 1rem auto;
    width: 600px;
    text-align: center;
    background: seashell;
    padding: .2rem;
    border: .2rem dotted darkgray;
  `

  const breakpoints = {
    small: {
      breakpoint: '(max-width: 600px)',
      number: 1
    },
    medium: {
      breakpoint: '(min-width: 601px) and (max-width: 768px)',
      number: 2
    },
    'column-layout-width': {
      breakpoint: '(min-width: 769px) and (max-width: 920px)',
      number: 3
    },
    'medium-large': {
      breakpoint: '(min-width: 921px) and (max-width: 1024px)',
      number: 4
    },
    large: {
      breakpoint: '(min-width: 1025px)',
      number: 5
    }
  }

  const makeReactResponsiveExample = () => {
    return Object.keys(breakpoints).map((reference, index) => {
      return (
        <MediaQuery
          key={index}
          query={breakpoints[`${reference}`].breakpoint} >
          <div
            className='react-responsive-examples' >
            {breakpoints[`${reference}`].number}
          </div>
        </MediaQuery>
      )
    })
  }

  const reactResponsiveElement = makeReactResponsiveExample()

  return (
    <div>
      <h3>
        Responsive Design - Using CSS media queries in CSS:
      </h3>

      <img
        className='responsive-design' />

      <div
        className='responsive-div'>
        Other media queries include:<br />
        orientation: landscape / Retina graphics / aspect-ratio / resolution and more
      </div>

      <h3>
        Responsive Design - Using React-responsive:
      </h3>

      <MediaQuery
        minWidth={600}>
        {(matches) => {
          return (matches) ? reactResponsiveDiv : basketballImage
        }}
      </MediaQuery>

      <p>
        Counting using react responsive as an example (and using query):
      </p>
      {reactResponsiveElement}

      <h3>
        Responsive Design - Using Styled components:
      </h3>

      <StyledSectionExample>
        Using styled component, background color will change on breakpoints.
      </StyledSectionExample>

      <StyledDiv>
        just styling a React component through styled component
      </StyledDiv>

      <h3>
        Adaptive Design:
      </h3>

      <div
        className='responsive-div'>
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
  )
}

export default ResponsiveDesign
