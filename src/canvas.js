import React from "react";
import ReactDOM from "react-dom";

const rect = (ctx, x, y, width, height) => ctx.fillRect(x, y, width, height);

class Canvas extends React.Component {
  componentDidMount() {
    const ctx = this.refs.canvas.getContext("2d");

    ctx.clearRect(0, 0, 1600, 1600);

    // The fillRect() method draws a "filled" rectangle. The default color of the fill is black.
    ctx.fillStyle = "blue";
    ctx.strokeStyle = "#FF0000";
    ctx.fillRect(10, 10, 50, 50);

    // to draw the borders of as rectangle (stroke)
    ctx.strokeStyle = "darkgreen";
    ctx.strokeRect(100, 20, 75, 30);

    // to draw with a black shadow
    ctx.shadowBlur = 20;
    ctx.shadowColor = "black";
    ctx.fillStyle = "yellow";
    ctx.fillRect(200, 20, 100, 80);

    // to draw with an offset shadow
    ctx.shadowBlur = 10;
    ctx.shadowOffsetX = 20;
    ctx.shadowColor = "darkorange";
    ctx.fillStyle = "red";
    ctx.fillRect(350, 10, 70, 30);

    // shadows need to be cancelled for any future stroke not to have shadows
    ctx.shadowBlur = 0;
    ctx.shadowOffsetX = 0;

    // To draw a line with rounded end caps:
    ctx.beginPath();
    ctx.lineCap = "round";
    ctx.moveTo(20, 150);
    ctx.lineTo(200, 110);
    ctx.strokeStyle = "purple";
    ctx.stroke();

    // ctx.rect also draws a rectangle
    ctx.rect(250, 150, 150, 100);
    ctx.strokeStyle = "black";
    ctx.stroke();

    // To draw a line:
    ctx.beginPath();
    ctx.moveTo(500, 50);
    ctx.lineTo(600, 120);
    ctx.stroke();

    // to draw a quadratic Bézier curve:
    ctx.beginPath();
    ctx.moveTo(700, 200);
    ctx.quadraticCurveTo(20, 20, 900, 350);
    ctx.stroke();

    // arc is used to draw a circle
    // x is The x-coordinate of the center of the circle, y is the y-coordinate of the center of the circle, r	is The radius of the circle
    ctx.beginPath();
    ctx.arc(60, 250, 50, 0, 2 * Math.PI);
    ctx.strokeStyle = "darkblue";
    ctx.stroke();

    // to rotate a shap of a specific angle
    ctx.rotate((20 * Math.PI) / 180);
    ctx.fillStyle = "green";
    ctx.fillRect(200, 250, 100, 50);

    // to cancel it...and it does not work!
    ctx.rotate(0 / 180);

    // to write something
    ctx.font = "30px Arial";
    ctx.fillText("Hello World", 300, 275);

    // to write something with a stroke text
    ctx.font = "30px Arial";
    ctx.textAlign = "center"; // optional
    ctx.strokeText("Yo yo!", 500, 200);
  }

  getClickCoordinates(event) {
    ReactDOM.render(
      <strong>
        Coordinates: {event.pageX || 0} , {event.pageY || 0}
      </strong>,
      document.getElementById("coordinates")
    );
  }

  render() {
    return (
      <div>
        see comments in the file to understand how it works:
        <br />
        <br />
        <canvas
          ref="canvas"
          width={1200}
          height={500}
          onClick={e => this.getClickCoordinates(e)}
          style={{ border: "1px solid black" }}
        />
        <br />
        Click to see coordinates:
        <div id="coordinates" />
      </div>
    );
  }
}

export default Canvas;
