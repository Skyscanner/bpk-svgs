import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M12.707 19.713a1 1 0 01-1.414 0l-7-7a1 1 0 010-1.414l7-7a1 1 0 011.438 1.39l-.024.024-5.293 5.293H19a1 1 0 010 2H7.414l5.293 5.293a1 1 0 010 1.414z" /></svg>);