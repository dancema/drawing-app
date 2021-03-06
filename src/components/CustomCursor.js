import React from "react";

const CustomCursor = React.forwardRef((props, ref) => {
  const position = props.position;
  const color = props.color;
  const size = parseInt(props.size, 10);

  const rect = ref.current.getBoundingClientRect();

  return (
    <div
      style={{
        position: "absolute",
        width: `${15 + 3 * (size-3)}px`,
        height: `${15 + 3 * (size-3)}px`,
        backgroundColor: `${color}`,
        borderRadius: "50%",
        cursor: "none",
        transition: "width 2s, height 2s, background-color 2s, transform 2s",
        left: `${rect.left + position.x}px`,
        top: `${rect.top + position.y}px`,
      }}
    ></div>
  );
});

export default CustomCursor;
