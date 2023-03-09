import React from "react";

const BlogImage = (props) => {
  return (
    <img
      src={props.url}
      alt={props.alt}
      width={props.width}
      height={props.height}
    />
  );
};

export default BlogImage;
