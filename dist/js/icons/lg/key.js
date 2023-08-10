import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M21.713 20.293l-7.958-7.958a6.5 6.5 0 10-1.414 1.414l2.751 2.75-2.293 2.294a1 1 0 001.414 1.414l2.293-2.293.85.849-1.539 1.512a1 1 0 101.378 1.45l1.574-1.547 1.53 1.529a1 1 0 001.414-1.414zM8.506 13a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5z" /></svg>);