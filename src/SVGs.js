import React from "react";
import SVGImageComponent from "./svg-image-component";
// import { linearGradient } from "react";

const styledDiv = {
  display: "flex"
};

const SVGs = () => {
  return (
    <div>
      <h2>Some drawn shapes made in SVGs:</h2>

      <div style={styledDiv}>
        <svg>
          <rect height={50} width={200} x={25} y={25} fill="lightseagreen" />
        </svg>

        <svg>
          <rect
            x={15}
            y={15}
            width={70}
            height={70}
            stroke="red"
            strokeWidth={2}
            fill="orange"
          />
        </svg>

        <svg>
          <ellipse cx={50} cy={50} rx={50} ry={25} fill="mediumorchid" />
        </svg>

        <svg>
          <circle cx={50} cy={50} r={30} fill="red" />
        </svg>
      </div>

      <div style={styledDiv}>
        <svg>
          <line x1={0} y1={0} x2={100} y2={50} stroke="navy" strokeWidth={2} />
        </svg>

        <svg>
          <polygon
            points="40,5 70,80 25,95"
            fill="lime"
            stroke="purple"
            strokeWidth={1}
          />
        </svg>

        <svg>
          <polyline
            points="10,10 20,12 30,20 40,60 60,70 95,90"
            fill="none"
            stroke="black"
            strokeWidth="3"
          />
        </svg>

        <svg>
          <path
            d="M25 10 L98 65 L70 25 L16 77 L11 30 L0 4 L90 50 L50 10 L11 22 L77 95 L20 25"
            fill="none"
            stroke="red"
          />
        </svg>
      </div>

      <div>
        <svg>
          <text
            fill="none"
            stroke="purple"
            fontSize="30"
            fontWeight="bold"
            x="150"
            y="30"
            textAnchor="middle"
          >
            STROKED TEXT
          </text>
        </svg>
      </div>

      <div>
        <div
          style={{ padding: "10px", margin: "10px", border: "5px solid red" }}
        >
          SVG React components below: (I made them as links):
          <br /> - The SVG fills & hover states are directly manipulated in the
          component.
          <br /> - I added a responsive design so they change sizes depending on
          screen sizes
          <br /> - the hover states can be very opinionated (works when hovered
          slowly. Fast can mess it up)
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "800px"
          }}
        >
          <SVGImageComponent text="without props (ball opacity change on hover)" />

          <SVGImageComponent
            text="with props (background color change on hover"
            backgroundColor="linen"
            mainColor="sienna"
            hoverBackgroundColor="black"
          />
        </div>
      </div>
    </div>
  );
};

export default SVGs;
