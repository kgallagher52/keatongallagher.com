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
            <li>Rectangles</li>
            <li>Lines</li>
            <li>Arcs / Circles</li>
            <li>Bezier Curves</li>
            <li>Images</li>
            <li>Rectangles</li>
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
