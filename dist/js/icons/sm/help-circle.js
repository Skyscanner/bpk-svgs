import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M12 1.5A10.5 10.5 0 1022.5 12 10.5 10.5 0 0012 1.5zM12 18a1.5 1.5 0 111.5-1.5A1.5 1.5 0 0112 18zm.75-4.5H12a1.5 1.5 0 010-3h.75a.75.75 0 000-1.5H10.5a1.5 1.5 0 010-3h2.25a3.75 3.75 0 010 7.5z" /></svg>);