import React, { useEffect } from "react";
import "./index.css";

const Canvas = () => {
  useEffect(() => {
    var e: HTMLCanvasElement = document.querySelector("canvas");
    e.style.width = window.innerWidth.toString() + "px";
    e.style.height = window.innerHeight.toString() + "px";
    var c = e.getContext("2d");

    /* Drawing Rectangle */
    c.fillStyle = "rgba(0,0,0,0.3)";
    c.fillRect(100, 100, 25, 25);
    c.fillStyle = "orange";
    c.fillRect(150, 75, 25, 25);
    c.fillStyle = "purple";
    c.fillRect(200, 100, 25, 25);

    /* Drawing a Line */
    c.beginPath();
    c.moveTo(90, 90); // Where to start the line
    c.lineTo(120, 100); // Where draw too
    c.lineTo(190, 100);
    c.lineTo(200, 100);
    c.lineTo(230, 90);
    c.lineTo(230, 90);
    c.strokeStyle = "red";
    c.stroke(); // Draw

    /* Arc / Circle */

    for (var i = 0; i < 3; i++) {
      var x = (Math.random() * window.innerWidth) / 6;
      var y = (Math.random() * window.innerHeight) / 6;
      c.beginPath(); // Starts new line
      c.arc(x, y, 10, 0, 6.5, false);
      c.strokeStyle = "blue";
      c.stroke();
    }
  }, []);
  return (
    <div className="canvas" data-test="canvas-page">
      <div className="wrapper">
        <div className="info">
          <ol>
            <h3>Four Essential Skills for Any HTML5 Canvas Piece:</h3>
            <li>Creating and Resizing Your Canvas</li>
            <li>Drawing Elements</li>
            <li>Animating Elements</li>
            <li>Interacting with Elements</li>
          </ol>
          <ol>
            <h3>Canvas Objects:</h3>
            <li>
              <a href="https://www.youtube.com/redirect?redir_token=9Dufl4zqfiDAA5hfeVrZmTel3Tl8MTU5MTc0OTQ5MUAxNTkxNjYzMDkx&event=video_description&v=83L6B13ixQ0&q=https%3A%2F%2Fchristopherlis.com%2Fprojects%2Famplify">
                Rectangles
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/redirect?redir_token=9Dufl4zqfiDAA5hfeVrZmTel3Tl8MTU5MTc0OTQ5MUAxNTkxNjYzMDkx&event=video_description&v=83L6B13ixQ0&q=https%3A%2F%2Fchristopherlis.com%2Fprojects%2Fits-alive%21">
                Lines
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/redirect?redir_token=9Dufl4zqfiDAA5hfeVrZmTel3Tl8MTU5MTc0OTQ5MUAxNTkxNjYzMDkx&event=video_description&v=83L6B13ixQ0&q=https%3A%2F%2Fchristopherlis.com%2Fprojects%2Fintertwined">
                Arcs / Circles
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/redirect?redir_token=9Dufl4zqfiDAA5hfeVrZmTel3Tl8MTU5MTc0OTQ5MUAxNTkxNjYzMDkx&event=video_description&v=83L6B13ixQ0&q=http%3A%2F%2Fcodepen.io%2Ftholman%2Ffull%2Ffoxtn%2F">
                Bezier Curves
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/redirect?redir_token=9Dufl4zqfiDAA5hfeVrZmTel3Tl8MTU5MTc0OTQ5MUAxNTkxNjYzMDkx&event=video_description&v=83L6B13ixQ0&q=http%3A%2F%2Fcodepen.io%2Fallanpope%2Fpen%2FLVWYYd">
                Images
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/redirect?redir_token=9Dufl4zqfiDAA5hfeVrZmTel3Tl8MTU5MTc0OTQ5MUAxNTkxNjYzMDkx&event=video_description&v=83L6B13ixQ0&q=http%3A%2F%2Fcodepen.io%2Fsakri%2Ffull%2FmtlDu%2F">
                Rectangles
              </a>
            </li>
          </ol>
        </div>
        <h4>My Canvas</h4>
        <canvas></canvas>

        <a href="https://www.youtube.com/watch?v=EO6OkltgudE&list=PLpPnRKq7eNW3We9VdCfx9fprhqXHwTPXL">
          Source Video: Chris Courses
        </a>
      </div>
    </div>
  );
};

export default Canvas;
