import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M12 1.5A10.5 10.5 0 1022.5 12 10.5 10.5 0 0012 1.5zM16.5 12a1.5 1.5 0 01-1.5 1.5h-4.5v3a1.5 1.5 0 01-3 0v-9a1.5 1.5 0 013 0v3h3v-3a1.5 1.5 0 013 0z" /></svg>);