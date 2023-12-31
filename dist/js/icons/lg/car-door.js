import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M13.318 4a3 3 0 012.046.807l5.048 4.71A5 5 0 0122 13.173V17c0 1.657-.343 3-2 3H3a1 1 0 01-1-1V6a2 2 0 012-2h9.318zM4 7v5a1 1 0 001 1h13.586c.89 0 1.337-1.077.707-1.707l-5-5A1 1 0 0013.586 6H5a1 1 0 00-1 1zm.5 7a.5.5 0 000 1h3a.5.5 0 000-1h-3z" /></svg>);