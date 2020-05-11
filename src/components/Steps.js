import React from "react";

export default function Steps(props) {
  const fontStyles = {
    fontSize: ".75rem",
    margin: "1rem 2rem",
  };

  return (
    <div style={{ textAlign: "center", margin: "1rem" }}>
      <span
        style={fontStyles}
        className={props.location === "/info" ? "text-primary" : "text-muted"}
      >
        YOUR INFO
      </span>

      <span
        style={fontStyles}
        className={
          props.location === "/savings" ? "text-primary" : "text-muted"
        }
      >
        SAVINGS
      </span>

      <span
        style={fontStyles}
        className={
          props.location === "/personalize" ? "text-primary" : "text-muted"
        }
      >
        PERSONALIZE
      </span>
    </div>
  );
}
