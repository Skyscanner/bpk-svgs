import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M10.5 1.5a1 1 0 000 2h5a3 3 0 013 3v12a1 1 0 002 0v-12a5 5 0 00-5-5z" /><path d="M5.5 4.5a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2v-14a2 2 0 00-2-2z" /></svg>);