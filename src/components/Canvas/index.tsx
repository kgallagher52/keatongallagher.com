import React, { useEffect } from "react";
import "./index.css";

const Canvas = () => {
  useEffect(() => {
    var e: HTMLCanvasElement = document.querySelector("canvas");
    e.style.width = window.innerWidth.toString() + "px";
    e.style.height = window.innerHeight.toString() + "px";
    var c = e.getContext("2d");
    // fillRect(x,y,width,height)
    c.fillRect(100, 10, 50, 25);
  }, []);
  return (
    <div className="canvas" data-test="canvas-page">
      <div className="wrapper">
        <h3>Four Essential Skills for Any HTML5 Canvas Piece:</h3>
        <ol>
          <li>Creating and Resizing Your Canvas</li>
          <li>Drawing Elements</li>
          <li>Animating Elements</li>
          <li>Interacting with Elements</li>
        </ol>
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
