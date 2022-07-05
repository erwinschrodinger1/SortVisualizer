import React from "react";
import "./Graph.sass";

export default function Graph(prop) {
  return (
    <div className="canvas">
      {prop.array?.map((data, index) => (
        <div
          key={index}
          className="histogram"
          style={{
            height: `${data * 3}px`,
            width: `${100 / prop.array.length}%`,
            backgroundColor: `blue`,
            borderWidth: `${2 / prop.array.length}px`,
            borderColor: `white`,
            borderStyle: `solid`,
          }}
        ></div>
      ))}
    </div>
  );
}
