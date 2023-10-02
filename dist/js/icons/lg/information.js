import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M21.045 9.695l-6.739-6.74h-.001a3.26 3.26 0 00-4.61 0l-6.74 6.74a3.26 3.26 0 000 4.61l6.74 6.74a3.26 3.26 0 004.61 0l6.74-6.74a3.26 3.26 0 000-4.61zM13 16a1 1 0 01-2 0v-5a1 1 0 012 0zm-1-7a1 1 0 111-1 1 1 0 01-1 1z" /></svg>);