import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M4.5 10.5a6 6 0 1112 0 6 6 0 01-12 0zm6-9a9 9 0 105.215 16.336l4.224 4.225a1.5 1.5 0 002.122-2.122l-4.225-4.224A9 9 0 0010.5 1.5z" clipRule="evenodd" /></svg>);