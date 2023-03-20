import React from "react";

const Coach = (props) => {
  return (
    <div>
      <img
        src={props.imgUrl}
        width={props.width}
        height={props.height}
        alt={props.name}
      />
      <a>{props.name}</a>
    </div>
  );
};

export default Coach;
