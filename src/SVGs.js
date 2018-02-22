import React from 'react';

const styledDiv = {
  display: 'flex'
};

const SVGs = () => {
  return (
    <div>
      <h2>Some drawn shapes made in SVGs:</h2>

      <div
        style={styledDiv}>

        <svg>
          <rect
            height={50}
            width={200}
            x={25}
            y={25}
            fill="lightseagreen" />
        </svg>

        <svg>
          <rect
            x={15}
            y={15}
            width={70}
            height={70}
            stroke="red"
            strokeWidth={2}
            fill="orange" />
        </svg>

        <svg>
          <ellipse
            cx={50}
            cy={50}
            rx={50}
            ry={25}
            fill="mediumorchid" />
        </svg>

        <svg>
          <circle
            cx={50}
            cy={50}
            r={30}
            fill="red" />
        </svg>
      </div>
    </div>
  );
}

export default SVGs;