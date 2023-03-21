import React from "react";
import Styled from "../../../styles/components/careerCoaching/Coach.styled";

const Coach = (props) => {
  return (
    <Styled.Wrap onClick={props.handleClick}>
      <img
        src={props.imgUrl}
        width={props.width}
        height={props.height}
        alt={props.name}
        title={props.name}
      />
      <span className="coach-link">{props.name}</span>
    </Styled.Wrap>
  );
};

export default Coach;
