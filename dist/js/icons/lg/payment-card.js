import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M5 4a3 3 0 00-3 3v.5a.5.5 0 00.5.5h19a.5.5 0 00.5-.5V7a3 3 0 00-3-3zm17 6.5a.5.5 0 00-.5-.5h-19a.5.5 0 00-.5.5V17a3 3 0 003 3h14a3 3 0 003-3z" /></svg>);