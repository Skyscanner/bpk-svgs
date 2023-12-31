import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M12 0C6.201 0 1.5 4.367 1.5 9.754v.075a9.27 9.27 0 001.816 5.41 38.398 38.398 0 007.84 8.461 1.339 1.339 0 001.689 0 38.436 38.436 0 007.839-8.46A9.27 9.27 0 0022.5 9.83v-.076C22.5 4.367 17.799 0 12 0zm0 15a4.5 4.5 0 114.5-4.5A4.5 4.5 0 0112 15z" /></svg>);