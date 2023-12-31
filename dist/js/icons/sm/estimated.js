import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M19.05 13.3l-5.3-1.3 5.3-1.3a2.57 2.57 0 001.6-3.7 2.497 2.497 0 00-4-.5l-3.8 4 1.5-5.2a2.518 2.518 0 00-2.4-3.3 2.47 2.47 0 00-2.4 3.2l1.6 5.2-3.8-4a2.497 2.497 0 00-4 .5 2.547 2.547 0 001.6 3.7l5.3 1.3-5.3 1.3a2.57 2.57 0 00-1.6 3.7 2.497 2.497 0 004 .5l3.8-4-1.5 5.2a2.488 2.488 0 104.7.2l-1.6-5.2 3.8 4a2.497 2.497 0 004-.5 2.528 2.528 0 00-1.5-3.8z" /></svg>);